import OpenAI from "openai";

type MemeParameter = {
  fieldName: string;
  description: string;
};

type MemeProps = {
  [fieldName: string]: string;
};

// todo: better type support
type MemeTemplate = {
  name: string;
  description: string;
  arguments: MemeParameter[];
  render: (props: MemeProps) => React.ReactNode;
};

function getFunctionName(memeName: string) {
  return `generate_${memeName}_meme`;
}

function getMemeName(functionName: string) {
  return (functionName.match(/^generate_(\w+)_meme$/) ?? ["", ""])[1];
}

function createFunctionDesc(
  template: MemeTemplate
): OpenAI.Chat.Completions.ChatCompletionCreateParams.Function {
  const { name: memeName, description, arguments: parametersArr } = template;

  const name = getFunctionName(memeName);

  const properties = parametersArr.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.fieldName]: { type: "string", description: curr.description },
    };
  }, {});

  const required = parametersArr.map(({ fieldName }) => fieldName);

  return {
    name,
    description,
    parameters: {
      type: "object",
      properties,
      required,
    },
  };
}

export { type MemeTemplate, createFunctionDesc, getFunctionName, getMemeName };

import Image from "next/image";

function DrakeHotlineBling() {
  return (
    <Image src="/drake-hotline-bling.jpg" width={1200} height={1200} alt="" />
  );
}

export { DrakeHotlineBling };

const data = {
  userId: "",
  template: "drake_hotline_bling",
  text1: "using vscode",
  text2: "using vim",
};

const data2 = {
  userId: "",
  template: "angry_cat",
  text: "",
};

const tem1 = [
  {
    name: "drake_hotline_bling",
    explanation: `
  One of the most popular memes on the Internet, this template shows Drake first leaning to the side expressing distaste for a certain thing, then in the bottom panel, expressing more like for a similar but better thing. In the top panel, Drake says "no" to something he dislikes, but in the bottom panel, Drake says "yes" to something he likes. You should use the Drake meme maker to show a similar but subtly clear comparison between two things.`,
    arguements: {
      text1: {
        explanation: "this is the text that shows the 'before'",
      },
      text2: {
        explanation: "this is the text that shows the 'after'",
      },
    },
    examples: [
      {
        text1: "using vscode",
        text2: "using nvim",
      },
    ],
    component: ({ textargs1, textarg }) => {
      return <Image />;
    },
  },
];

import { MemeTemplate } from "./schema";

const memeTemplates: MemeTemplate[] = [
  {
    name: "drake_hotline_bling",
    description: `
    One of the most popular memes on the Internet, this template shows Drake first leaning to the side expressing distaste for a certain thing, then in the bottom panel, expressing more like for a similar but better thing. In the top panel (text_1), Drake says "no" to something he dislikes, but in the bottom panel (text_2), Drake says "yes" to something he likes. You should use the Drake meme maker to show a similar but subtly clear comparison between two things. 
  
    # Example
    text_1: Use study guides
    text_2: Don't study 
    `,
    arguments: [
      {
        fieldName: "text_1",
        description: "something drake says 'no' to, something he dislikes",
      },
      {
        fieldName: "text_2",
        description: "something drake says 'yes' to, something he likes",
      },
    ],
    render: ({ text_1, text_2 }) => (
      <div className="border relative">
        <div>IMAGE!</div>
        <div className="absolute left-4">{text_1}</div>
        <div className="absolute left-11">{text_2}</div>
      </div>
    ),
  },
];

export { memeTemplates };

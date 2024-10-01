import ReactMarkdown from "react-markdown";
import supersub from "remark-supersub";

type MarkdownProps = {
  children: string;
  indent?: boolean;
};

const Markdown = ({ indent = true, children }: MarkdownProps) => {
  return (
    <ReactMarkdown
      className={`prose dark:prose-invert !max-w-none text-black dark:text-zinc-200 ${
        indent && "indent-6"
      }`}
      children={children}
      remarkPlugins={[supersub]}
    />
  );
};

export default Markdown;

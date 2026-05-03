import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Events() {
    return (
      <PageContainer title={"Eventos"} subtitle={"SyntheticEvents — wrappers cross-browser sobre eventos nativos."} difficulty={"iniciante"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"function Search() {\n  function onSubmit(e: React.FormEvent) {\n    e.preventDefault();\n    const data = new FormData(e.target as HTMLFormElement);\n    console.log(data.get('q'));\n  }\n\n  return (\n    <form onSubmit={onSubmit}>\n      <input name=\"q\" onChange={e => console.log(e.target.value)} />\n    </form>\n  );\n}"} />
      <AlertBox type={"info"} title={"camelCase"}><span dangerouslySetInnerHTML={{__html: "<code>onClick</code>, <code>onChange</code>, <code>onSubmit</code> — nunca <code>onclick</code>."}} /></AlertBox>
      </PageContainer>
    );
  }
  
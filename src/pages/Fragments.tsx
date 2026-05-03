import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Fragments() {
    return (
      <PageContainer title={"Fragments"} subtitle={"Retorne vários elementos sem criar um <div> extra."} difficulty={"iniciante"} timeToRead={"4 min"}>
        <CodeBlock title={"exemplo"} code={"// Forma curta\nreturn (\n  <>\n    <Header />\n    <Main />\n    <Footer />\n  </>\n);\n\n// Quando precisa de key (em listas)\nreturn items.map(i => (\n  <Fragment key={i.id}>\n    <dt>{i.label}</dt>\n    <dd>{i.value}</dd>\n  </Fragment>\n));"} />
      <AlertBox type={"info"} title={"Por que existem"}><span dangerouslySetInnerHTML={{__html: "HTML semântico (table, dl, etc) precisa de filhos diretos específicos. Sem Fragment, um div extra quebraria o layout."}} /></AlertBox>
      </PageContainer>
    );
  }
  
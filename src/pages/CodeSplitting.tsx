import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CodeSplitting() {
    return (
      <PageContainer title={"Code Splitting"} subtitle={"Quebre o bundle em chunks carregados sob demanda."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"const Heavy = lazy(() => import('./Heavy'));\n\n<Suspense fallback={<Spinner />}>\n  <Heavy />\n</Suspense>"} />
      <AlertBox type={"info"} title={"Vite faz tudo"}><span dangerouslySetInnerHTML={{__html: "Vite gera chunks automaticamente para imports dinâmicos. Não há config necessária."}} /></AlertBox>
      </PageContainer>
    );
  }
  
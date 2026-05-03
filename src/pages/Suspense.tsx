import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Suspense() {
    return (
      <PageContainer title={"Suspense"} subtitle={"Aguarde dados/código com fallback declarativo."} difficulty={"avancado"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"<Suspense fallback={<Spinner />}>\n  <LazyComponent />\n  <DataDrivenComponent />\n</Suspense>"} />
      <p>Originalmente para code-splitting (React.lazy). Em React 18+ funciona também para data fetching com bibliotecas que suportam: React Query v5, Relay, Next.js.</p>
      <AlertBox type={"success"} title={"Combine com transitions"}><span dangerouslySetInnerHTML={{__html: "useTransition + Suspense permite atualizações de dados sem flashes de fallback."}} /></AlertBox>
      </PageContainer>
    );
  }
  
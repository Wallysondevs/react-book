import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function LazyRoutes() {
    return (
      <PageContainer title={"Lazy Routes"} subtitle={"Code-split por rota — bundles menores, carregamento mais rápido."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"import { lazy, Suspense } from 'react';\n\nconst Dashboard = lazy(() => import('./Dashboard'));\nconst Settings = lazy(() => import('./Settings'));\n\n<Suspense fallback={<Spinner />}>\n  <Routes>\n    <Route path=\"/dashboard\" element={<Dashboard />} />\n    <Route path=\"/settings\" element={<Settings />} />\n  </Routes>\n</Suspense>"} />
      <AlertBox type={"success"} title={"Sempre vale"}><span dangerouslySetInnerHTML={{__html: "Quase sempre você quer lazy-load por rota. Vite gera chunks separados automaticamente."}} /></AlertBox>
      </PageContainer>
    );
  }
  
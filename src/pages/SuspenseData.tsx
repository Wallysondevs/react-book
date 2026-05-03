import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function SuspenseData() {
    return (
      <PageContainer title={"Data Fetching com Suspense"} subtitle={"Carregue dados de forma declarativa."} difficulty={"avancado"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"// React Query v5 + Suspense\nfunction Posts() {\n  const { data } = useSuspenseQuery({\n    queryKey: ['posts'],\n    queryFn: getPosts,\n  });\n  return <ul>{data.map(p => <li key={p.id}>{p.title}</li>)}</ul>;\n}\n\n<Suspense fallback={<Spinner />}>\n  <Posts />\n</Suspense>"} />
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Swr() {
    return (
      <PageContainer title={"SWR"} subtitle={"Alternativa do time do Next.js — leve e elegante."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"import useSWR from 'swr';\n\nconst fetcher = (url) => fetch(url).then(r => r.json());\n\nfunction Profile() {\n  const { data, error, isLoading } = useSWR('/api/me', fetcher);\n  if (isLoading) return <Spinner />;\n  if (error) return <Error />;\n  return <h1>{data.name}</h1>;\n}"} />
      </PageContainer>
    );
  }
  
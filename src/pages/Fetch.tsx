import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Fetch() {
    return (
      <PageContainer title={"fetch"} subtitle={"Como buscar dados de API REST com a API nativa."} difficulty={"iniciante"} timeToRead={"8 min"}>
        <CodeBlock title={"exemplo"} code={"useEffect(() => {\n  let cancelled = false;\n  fetch('/api/users')\n    .then(r => r.json())\n    .then(data => { if (!cancelled) setUsers(data); });\n  return () => { cancelled = true; };\n}, []);"} />
      <AlertBox type={"success"} title={"Para qualquer projeto sério"}><span dangerouslySetInnerHTML={{__html: "Use React Query ou SWR — eles cuidam de cache, retry, refetch e estado de loading/error pra você."}} /></AlertBox>
      </PageContainer>
    );
  }
  
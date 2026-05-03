import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactQuery() {
    return (
      <PageContainer title={"React Query"} subtitle={"Cache inteligente, refetch automático, mutations — game changer."} difficulty={"intermediario"} timeToRead={"11 min"}>
        <CodeBlock title={"setup"} code={"import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';\n\nconst qc = new QueryClient();\n\n<QueryClientProvider client={qc}>\n  <App />\n</QueryClientProvider>"} />
      <CodeBlock title={"query"} code={"const { data, isLoading, error } = useQuery({\n  queryKey: ['users'],\n  queryFn: () => fetch('/api/users').then(r => r.json()),\n  staleTime: 60_000,\n});"} />
      <CodeBlock title={"mutation"} code={"const create = useMutation({\n  mutationFn: (user) => api.post('/users', user),\n  onSuccess: () => qc.invalidateQueries({ queryKey: ['users'] }),\n});"} />
      <AlertBox type={"success"} title={"Padrão de fato"}><span dangerouslySetInnerHTML={{__html: "Em 2026, React Query é a forma de fazer data fetching em SPAs React. Resolve 80% dos problemas que pessoas usavam Redux pra resolver."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Msw() {
    return (
      <PageContainer title="MSW" subtitle="Mock Service Worker — intercepta requests reais nos testes." difficulty="intermediario" timeToRead="7 min">
        <CodeBlock title="exemplo" code="import { http, HttpResponse } from 'msw';\nimport { setupServer } from 'msw/node';\n\nconst server = setupServer(\n  http.get('/api/users', () => HttpResponse.json([{ id: 1, name: 'Ana' }])),\n);\n\nbeforeAll(() => server.listen());\nafterAll(() => server.close());" />
      <AlertBox type="success" title="Por que adorei">Você não muda código de produção pra testar. Mock está no nível da rede — funciona com axios, fetch, react-query, qualquer coisa.</AlertBox>
      </PageContainer>
    );
  }
  
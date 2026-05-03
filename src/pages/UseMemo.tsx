import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseMemo() {
    return (
      <PageContainer title={"useMemo"} subtitle={"Memorize cálculos caros entre renders."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"exemplo"} code={"const filtered = useMemo(\n  () => items.filter(i => i.nome.includes(query)),\n  [items, query]\n);"} />
      <AlertBox type={"warning"} title={"Não otimize prematuramente"}><span dangerouslySetInnerHTML={{__html: "useMemo tem custo (comparação de deps + memória). Use só quando o cálculo é provadamente caro ou para estabilizar referências."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Memo() {
    return (
      <PageContainer title="memo" subtitle="Evite re-renders desnecessários memoizando o componente." difficulty="intermediario" timeToRead="7 min">
        <CodeBlock title="exemplo" code="const ExpensiveItem = memo(function ExpensiveItem({ data }) {\n  // só renderiza se props mudarem\n  return <div>{processarPesado(data)}</div>;\n});" />
      <AlertBox type="warning" title="Não use no escuro">memo tem custo de comparação. Só use quando profiler mostrar re-renders desnecessários custosos.</AlertBox>
      </PageContainer>
    );
  }
  
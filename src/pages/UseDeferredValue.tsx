import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseDeferredValue() {
    return (
      <PageContainer title="useDeferredValue" subtitle="Adia atualização de um valor para manter responsividade." difficulty="avancado" timeToRead="6 min">
        <CodeBlock title="exemplo" code="const deferredQuery = useDeferredValue(query);\nconst results = useMemo(\n  () => searchHeavy(deferredQuery),\n  [deferredQuery]\n);" />
      <AlertBox type="info" title="Diferença para useTransition">useTransition envolve a action; useDeferredValue espera o valor estabilizar antes de propagar.</AlertBox>
      </PageContainer>
    );
  }
  
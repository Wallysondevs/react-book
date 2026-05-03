import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseCallback() {
    return (
      <PageContainer title={"useCallback"} subtitle={"useMemo para funções — estabilize referências."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"const handleClick = useCallback(\n  (id: number) => setSelected(id),\n  [setSelected]\n);\n\n// Útil quando passa pra componente memoizado:\n<MemoizedItem onClick={handleClick} />"} />
      <AlertBox type={"info"} title={"Em 2026 use o React Compiler"}><span dangerouslySetInnerHTML={{__html: "O novo compilador adiciona useMemo/useCallback automaticamente. Vai tornar essas APIs quase desnecessárias para a maioria dos casos."}} /></AlertBox>
      </PageContainer>
    );
  }
  
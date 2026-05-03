import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactCompiler() {
    return (
      <PageContainer title={"React Compiler"} subtitle={"Memoização automática — adeus useMemo/useCallback manuais."} difficulty={"avancado"} timeToRead={"7 min"}>
        <p>Em 2025 o React Compiler entrou em GA. Ele analisa seu código e adiciona memoização automaticamente, eliminando 90% da necessidade de useMemo/useCallback.</p>
      <CodeBlock title={"setup"} code={"pnpm add -D babel-plugin-react-compiler\n# vite.config.ts: adicione no plugin react"} />
      <AlertBox type={"success"} title={"Game changer"}><span dangerouslySetInnerHTML={{__html: "Você escreve código limpo, o compiler faz a otimização. É um dos avanços mais empolgantes do React em anos."}} /></AlertBox>
      </PageContainer>
    );
  }
  
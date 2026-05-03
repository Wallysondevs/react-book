import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseLayoutEffect() {
    return (
      <PageContainer title={"useLayoutEffect"} subtitle={"Como useEffect, mas roda síncrono antes do browser pintar."} difficulty={"avancado"} timeToRead={"6 min"}>
        <p>Quando você precisa medir o DOM e ajustá-lo antes do usuário ver o flash do estado intermediário.</p>
      <CodeBlock title={"exemplo"} code={"useLayoutEffect(() => {\n  const rect = ref.current!.getBoundingClientRect();\n  setSize({ w: rect.width, h: rect.height });\n}, []);"} />
      <AlertBox type={"warning"} title={"Bloqueia paint"}><span dangerouslySetInnerHTML={{__html: "Use só quando precisar — em geral useEffect é melhor (não bloqueia o paint)."}} /></AlertBox>
      </PageContainer>
    );
  }
  
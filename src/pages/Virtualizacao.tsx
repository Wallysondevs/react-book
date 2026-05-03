import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Virtualizacao() {
    return (
      <PageContainer title={"Virtualização"} subtitle={"Renderize só o que está visível em listas gigantes."} difficulty={"avancado"} timeToRead={"8 min"}>
        <CodeBlock title={"tanstack"} code={"import { useVirtualizer } from '@tanstack/react-virtual';\n\nconst v = useVirtualizer({\n  count: 10000,\n  getScrollElement: () => parentRef.current,\n  estimateSize: () => 40,\n});"} />
      <AlertBox type={"success"} title={"Use TanStack Virtual"}><span dangerouslySetInnerHTML={{__html: "Sucessor do react-window — leve, headless, suporta variable height."}} /></AlertBox>
      </PageContainer>
    );
  }
  
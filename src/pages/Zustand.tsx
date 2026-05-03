import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Zustand() {
    return (
      <PageContainer title={"Zustand"} subtitle={"State management minimalista — só uma função."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"store"} code={"import { create } from 'zustand';\n\nconst useStore = create((set) => ({\n  count: 0,\n  inc: () => set(s => ({ count: s.count + 1 })),\n}));"} />
      <CodeBlock title={"uso"} code={"const count = useStore(s => s.count);\nconst inc = useStore(s => s.inc);"} />
      <AlertBox type={"success"} title={"Por que muita gente ama"}><span dangerouslySetInnerHTML={{__html: "API absurdamente simples, performance excelente, funciona fora de componentes, suporte a TypeScript impecável."}} /></AlertBox>
      </PageContainer>
    );
  }
  
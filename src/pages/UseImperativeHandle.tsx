import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseImperativeHandle() {
    return (
      <PageContainer title={"useImperativeHandle"} subtitle={"Exponha métodos imperativos a partir de um componente."} difficulty={"avancado"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"const Input = forwardRef<{ focus: () => void }>((_, ref) => {\n  const inner = useRef<HTMLInputElement>(null);\n  useImperativeHandle(ref, () => ({\n    focus: () => inner.current?.focus(),\n  }));\n  return <input ref={inner} />;\n});"} />
      <AlertBox type={"info"} title={"Use raramente"}><span dangerouslySetInnerHTML={{__html: "Quebra um pouco o modelo declarativo. Prefira passar callbacks como props."}} /></AlertBox>
      </PageContainer>
    );
  }
  
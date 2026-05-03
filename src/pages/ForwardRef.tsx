import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ForwardRef() {
    return (
      <PageContainer title={"forwardRef"} subtitle={"Passe refs para dentro de componentes filhos."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"const Input = forwardRef<HTMLInputElement, { label: string }>(\n  ({ label }, ref) => (\n    <label>\n      {label}\n      <input ref={ref} />\n    </label>\n  )\n);\n\n// Uso:\nconst inputRef = useRef<HTMLInputElement>(null);\n<Input ref={inputRef} label=\"Nome\" />"} />
      <AlertBox type={"info"} title={"React 19"}><span dangerouslySetInnerHTML={{__html: "A partir do React 19, refs viram props normais — forwardRef não é mais necessário em código novo."}} /></AlertBox>
      </PageContainer>
    );
  }
  
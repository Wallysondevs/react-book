import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseRef() {
    return (
      <PageContainer title="useRef" subtitle="Referência mutável que sobrevive entre renders." difficulty="intermediario" timeToRead="8 min">
        <h2>Acessar DOM</h2>
      <CodeBlock title="dom" code="function Input() {\n  const ref = useRef<HTMLInputElement>(null);\n  useEffect(() => { ref.current?.focus(); }, []);\n  return <input ref={ref} />;\n}" />
      <h2>Guardar valor mutável</h2>
      <CodeBlock title="value" code="const renderCount = useRef(0);\nrenderCount.current++; // não causa re-render" />
      <AlertBox type="info" title="useRef ≠ useState">Mudar <code>.current</code> NÃO re-renderiza. Use só para coisas que não devem disparar atualização.</AlertBox>
      </PageContainer>
    );
  }
  
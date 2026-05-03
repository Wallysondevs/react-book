import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseTransition() {
    return (
      <PageContainer title={"useTransition"} subtitle={"Marque updates como não-urgentes para manter UI responsiva."} difficulty={"avancado"} timeToRead={"8 min"}>
        <CodeBlock title={"exemplo"} code={"const [isPending, startTransition] = useTransition();\n\nfunction onChange(e) {\n  setQuery(e.target.value);            // urgente\n  startTransition(() => {\n    setResults(filter(big, e.target.value)); // pode ser interrompido\n  });\n}"} />
      <AlertBox type={"success"} title={"Concurrent React"}><span dangerouslySetInnerHTML={{__html: "Permite que React priorize updates urgentes (digitação) sobre lentos (renderizar lista filtrada de 10k items)."}} /></AlertBox>
      </PageContainer>
    );
  }
  
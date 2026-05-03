import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseEffect() {
    return (
      <PageContainer title={"useEffect"} subtitle={"Sincronize React com sistemas externos: API, DOM, timers."} difficulty={"iniciante"} timeToRead={"11 min"}>
        <CodeBlock title={"exemplo"} code={"useEffect(() => {\n  // roda após render quando deps mudarem\n  const timer = setInterval(() => tick(), 1000);\n\n  // cleanup — roda antes do próximo effect ou no unmount\n  return () => clearInterval(timer);\n}, [/* dependências */]);"} />
      <h2>Padrões</h2>
      <ul>
        <li dangerouslySetInnerHTML={{__html: "Sem deps (<code>[]</code>) → roda uma vez ao montar"}} />
        <li dangerouslySetInnerHTML={{__html: "Com deps → roda quando alguma muda"}} />
        <li dangerouslySetInnerHTML={{__html: "Sem array → roda em todo render (raramente queremos isso)"}} />
      </ul>
      <AlertBox type={"warning"} title={"Não use pra reagir a eventos"}><span dangerouslySetInnerHTML={{__html: "Se algo deve acontecer em resposta a clique, faça no handler. Effects são para sincronizar com sistemas externos."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ConditionalRendering() {
    return (
      <PageContainer title={"Renderização Condicional"} subtitle={"Mostre coisas diferentes baseado no estado."} difficulty={"iniciante"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplos"} code={"// Curto-circuito &&\n{loading && <Spinner />}\n\n// Ternário\n{user ? <Logout /> : <Login />}\n\n// Variável\nlet conteudo;\nif (loading) conteudo = <Spinner />;\nelse if (error) conteudo = <Error />;\nelse conteudo = <Lista items={data} />;\n\nreturn <div>{conteudo}</div>;"} />
      <AlertBox type={"warning"} title={"Cuidado com 0 e ''"}><span dangerouslySetInnerHTML={{__html: "<code>{count && <Badge/>}</code> renderiza '0' se count for 0! Use <code>count > 0 && ...</code> ou ternário."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Composition() {
    return (
      <PageContainer title={"Composição"} subtitle={"O padrão fundamental do React — componentes pequenos compostos."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"// Em vez de muitos boolean props:\n<Card showHeader showFooter showAvatar />\n\n// Componha com children e slots:\n<Card>\n  <Card.Header><Avatar /></Card.Header>\n  <Card.Body>{conteudo}</Card.Body>\n  <Card.Footer>{actions}</Card.Footer>\n</Card>"} />
      <AlertBox type={"success"} title={"Princípio número 1"}><span dangerouslySetInnerHTML={{__html: "Quando em dúvida entre props e composição, escolha composição."}} /></AlertBox>
      </PageContainer>
    );
  }
  
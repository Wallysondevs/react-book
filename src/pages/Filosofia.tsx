import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Filosofia() {
    return (
      <PageContainer title={"Filosofia: UI como função de estado"} subtitle={"Por que descrever a UI declarativamente mudou tudo."} difficulty={"iniciante"} timeToRead={"6 min"}>
        <h2>UI = f(state)</h2>
      <p>O React parte de uma ideia simples: descreva como a tela <em>deve ser</em> dado um estado, e ele cuida de aplicar as diferenças no DOM. Você nunca manipula o DOM diretamente.</p>
      <CodeBlock title={"conceito"} code={"// Imperativo (jQuery)\n$('#counter').text(count + 1);\n\n// Declarativo (React)\nreturn <span>{count}</span>;"} />
      <AlertBox type={"success"} title={"Por que importa"}><span dangerouslySetInnerHTML={{__html: "Código declarativo é mais previsível, testável e composável. Bugs raros de sincronização DOM↔estado simplesmente desaparecem."}} /></AlertBox>
      </PageContainer>
    );
  }
  
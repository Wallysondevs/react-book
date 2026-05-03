import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function KeysDeep() {
    return (
      <PageContainer title={"Keys: aprofundando"} subtitle={"Por que keys importam — e quando usar key para forçar reset."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <p>Keys ajudam o React a fazer diff correto. Mas elas têm um superpoder: <strong>mudar a key força a recriação completa do componente</strong>, incluindo reset de estado.</p>
      <CodeBlock title={"reset"} code={"// Reset do form quando o usuário muda\n<UserForm key={userId} user={user} />"} />
      <AlertBox type={"info"} title={"Truque útil"}><span dangerouslySetInnerHTML={{__html: "Quando você quer descartar todo o estado interno de uma sub-árvore, simplesmente mude a key. Mais limpo que limpar estado manualmente."}} /></AlertBox>
      </PageContainer>
    );
  }
  
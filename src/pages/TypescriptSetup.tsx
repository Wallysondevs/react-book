import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function TypescriptSetup() {
    return (
      <PageContainer title={"TypeScript Setup"} subtitle={"Type safety pra apps React modernos."} difficulty={"iniciante"} timeToRead={"6 min"}>
        <p>Vite + template <code>react-ts</code> já vem com TypeScript configurado. Em 2026, TS é praticamente padrão para qualquer app React de produção.</p>
      <AlertBox type={"success"} title={"Sempre strict"}><span dangerouslySetInnerHTML={{__html: "Ative <code>strict: true</code> sempre. Os erros que ele pega valem cada minuto a mais."}} /></AlertBox>
      </PageContainer>
    );
  }
  
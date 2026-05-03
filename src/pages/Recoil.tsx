import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Recoil() {
    return (
      <PageContainer title="Recoil" subtitle="Lib do Facebook para estado atômico — em manutenção desde 2023." difficulty="intermediario" timeToRead="6 min">
        <AlertBox type="warning" title="Status em 2026">O time do Recoil está em hiato; muitos projetos migraram para Jotai. Use só se já tem código existente.</AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ViteBuild() {
    return (
      <PageContainer title="Build com Vite" subtitle="Geração de produção, otimizada e dividida em chunks." difficulty="intermediario" timeToRead="6 min">
        <CodeBlock title="cmd" code="pnpm build           # gera dist/\npnpm preview         # serve localmente para testar" />
      <AlertBox type="success" title="Otimizações automáticas">Tree-shaking, minificação, code-splitting por dynamic import — tudo ligado por padrão.</AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CreateVite() {
    return (
      <PageContainer title="Criar projeto com Vite" subtitle="O scaffolding moderno para apps React em 2026." difficulty="iniciante" timeToRead="4 min">
        <h2>Comando</h2>
      <CodeBlock title="cli" code="pnpm create vite@latest meu-app -- --template react-ts\ncd meu-app\npnpm install\npnpm dev" />
      <p>Em segundos você tem um projeto React + TypeScript pronto, com HMR (Hot Module Replacement) instantâneo.</p>
      <AlertBox type="info" title="Por que Vite?">É 10–100× mais rápido que Webpack em dev. Foi adotado pela comunidade React (CRA foi descontinuado em 2023).</AlertBox>
      </PageContainer>
    );
  }
  
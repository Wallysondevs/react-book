import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CsrVsSsr() {
    return (
      <PageContainer title="CSR vs SSR" subtitle="Renderização no cliente, no servidor, ou ambos." difficulty="intermediario" timeToRead="8 min">
        <ul>
        <li><strong>CSR</strong> — Vite/CRA: rápido pra dev, ruim pra SEO/first paint</li>
        <li><strong>SSR</strong> — server renderiza HTML; melhor SEO e TTFB</li>
        <li><strong>SSG</strong> — gerado em build, servido como estático</li>
        <li><strong>RSC</strong> — Server Components, mistura ambos</li>
      </ul>
      <AlertBox type="info" title="Em 2026">Para landing pages e blogs use Astro ou Next.js (SSG/RSC). Para apps internos/SaaS, Vite + CSR ainda é ótimo.</AlertBox>
      </PageContainer>
    );
  }
  
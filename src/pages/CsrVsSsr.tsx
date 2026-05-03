import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CsrVsSsr() {
    return (
      <PageContainer title={"CSR vs SSR"} subtitle={"Renderização no cliente, no servidor, ou ambos."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <ul>
        <li dangerouslySetInnerHTML={{__html: "<strong>CSR</strong> — Vite/CRA: rápido pra dev, ruim pra SEO/first paint"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>SSR</strong> — server renderiza HTML; melhor SEO e TTFB"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>SSG</strong> — gerado em build, servido como estático"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>RSC</strong> — Server Components, mistura ambos"}} />
      </ul>
      <AlertBox type={"info"} title={"Em 2026"}><span dangerouslySetInnerHTML={{__html: "Para landing pages e blogs use Astro ou Next.js (SSG/RSC). Para apps internos/SaaS, Vite + CSR ainda é ótimo."}} /></AlertBox>
      </PageContainer>
    );
  }
  
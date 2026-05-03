import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function WebVitals() {
    return (
      <PageContainer title="Core Web Vitals" subtitle="Métricas que o Google usa pra rankear seu site." difficulty="intermediario" timeToRead="8 min">
        <ul>
        <li><strong>LCP</strong> — Largest Contentful Paint (&lt;2.5s)</li>
        <li><strong>INP</strong> — Interaction to Next Paint (&lt;200ms)</li>
        <li><strong>CLS</strong> — Cumulative Layout Shift (&lt;0.1)</li>
      </ul>
      <CodeBlock title="medir" code="import { onCLS, onINP, onLCP } from 'web-vitals';\nonCLS(console.log);\nonINP(console.log);\nonLCP(console.log);" />
      </PageContainer>
    );
  }
  
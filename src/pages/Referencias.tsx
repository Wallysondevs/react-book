import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Referencias() {
    return (
      <PageContainer title="Referências" subtitle="Onde aprender mais e se manter atualizado." difficulty="iniciante" timeToRead="4 min">
        <h2>Oficial</h2>
      <ul>
        <li>react.dev — docs novos, modernos</li>
        <li>react.dev/learn — tutorial interativo</li>
        <li>tanstack.com — React Query, Router, Virtual</li>
        <li>nextjs.org — framework</li>
      </ul>
      <h2>Comunidade</h2>
      <ul>
        <li>Theo (t3.gg), Lee Robinson, Dan Abramov, Kent C. Dodds</li>
        <li>Newsletter This Week in React</li>
        <li>Bytes (bytes.dev)</li>
      </ul>
      <AlertBox type="info" title="Mantenha-se atualizado">React e ecossistema mudam rápido. RSC, React Compiler, suspense para data — vale acompanhar a cada 3 meses.</AlertBox>
      </PageContainer>
    );
  }
  
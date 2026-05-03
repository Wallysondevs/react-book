import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Referencias() {
    return (
      <PageContainer title={"Referências"} subtitle={"Onde aprender mais e se manter atualizado."} difficulty={"iniciante"} timeToRead={"4 min"}>
        <h2>Oficial</h2>
      <ul>
        <li dangerouslySetInnerHTML={{__html: "react.dev — docs novos, modernos"}} />
        <li dangerouslySetInnerHTML={{__html: "react.dev/learn — tutorial interativo"}} />
        <li dangerouslySetInnerHTML={{__html: "tanstack.com — React Query, Router, Virtual"}} />
        <li dangerouslySetInnerHTML={{__html: "nextjs.org — framework"}} />
      </ul>
      <h2>Comunidade</h2>
      <ul>
        <li dangerouslySetInnerHTML={{__html: "Theo (t3.gg), Lee Robinson, Dan Abramov, Kent C. Dodds"}} />
        <li dangerouslySetInnerHTML={{__html: "Newsletter This Week in React"}} />
        <li dangerouslySetInnerHTML={{__html: "Bytes (bytes.dev)"}} />
      </ul>
      <AlertBox type={"info"} title={"Mantenha-se atualizado"}><span dangerouslySetInnerHTML={{__html: "React e ecossistema mudam rápido. RSC, React Compiler, suspense para data — vale acompanhar a cada 3 meses."}} /></AlertBox>
      </PageContainer>
    );
  }
  
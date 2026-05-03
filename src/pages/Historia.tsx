import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Historia() {
    return (
      <PageContainer title={"História do React"} subtitle={"De experimento interno do Facebook (2011) à biblioteca de UI mais usada do mundo."} difficulty={"iniciante"} timeToRead={"7 min"}>
        <h2>Origem</h2>
      <p>O React nasceu em 2011 como um projeto interno de Jordan Walke no Facebook para resolver problemas de manutenção do feed de notícias. Foi open-sourced em 2013 na JSConf US — e mudou a forma como o front-end é escrito.</p>
      <h2>Marcos</h2>
      <ul>
        <li dangerouslySetInnerHTML={{__html: "<strong>2013</strong> — Open source, JSX e Virtual DOM"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>2015</strong> — React Native"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>2016</strong> — Fiber (reconciler reescrito)"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>2019</strong> — Hooks (16.8)"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>2022</strong> — React 18 (concurrent features, Suspense para SSR)"}} />
        <li dangerouslySetInnerHTML={{__html: "<strong>2024-2026</strong> — Server Components, React Compiler"}} />
      </ul>
      <AlertBox type={"info"} title={"Hoje em 2026"}><span dangerouslySetInnerHTML={{__html: "React é mantido pela Meta + comunidade enorme; é a base de Next.js, Remix, Expo, e milhões de apps."}} /></AlertBox>
      </PageContainer>
    );
  }
  
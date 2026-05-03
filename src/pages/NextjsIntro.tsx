import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function NextjsIntro() {
    return (
      <PageContainer title={"Next.js — Intro"} subtitle={"O framework React mais usado em produção."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <CodeBlock title={"setup"} code={"pnpm create next-app@latest meu-app"} />
      <p>Oferece SSR/SSG/RSC, file-based routing, image optimization, API routes, middleware. Mantido pela Vercel.</p>
      <AlertBox type={"success"} title={"App Router"}><span dangerouslySetInnerHTML={{__html: "Desde Next 13+, o App Router (em <code>app/</code>) é o padrão e usa Server Components por padrão."}} /></AlertBox>
      </PageContainer>
    );
  }
  
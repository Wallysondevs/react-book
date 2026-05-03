import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function DeployNetlify() {
    return (
      <PageContainer title={"Deploy na Netlify"} subtitle={"Outra ótima opção para hospedagem estática + serverless."} difficulty={"iniciante"} timeToRead={"5 min"}>
        <p>Funciona praticamente igual à Vercel. Bom para SPAs Vite, sites Astro, etc.</p>
      <CodeBlock title={"netlify.toml"} code={"[build]\n  command = \"pnpm build\"\n  publish = \"dist\""} />
      </PageContainer>
    );
  }
  
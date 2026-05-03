import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function DeployGithubPages() {
    return (
      <PageContainer title={"Deploy no GitHub Pages"} subtitle={"Free, simples, perfeito para sites de documentação."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <p>Use GitHub Actions para buildar com Vite e publicar em <code>gh-pages</code>. Lembre de configurar <code>base</code> no vite.config para o subpath do repo.</p>
      <CodeBlock title={"vite.config.ts"} code={"export default defineConfig({\n  base: '/meu-repo/',\n  plugins: [react()],\n});"} />
      <AlertBox type={"info"} title={"Hash routing"}><span dangerouslySetInnerHTML={{__html: "Use hash routing (<code>#/rota</code>) para evitar problemas de 404 em refresh — ou adicione um arquivo <code>404.html</code>."}} /></AlertBox>
      </PageContainer>
    );
  }
  
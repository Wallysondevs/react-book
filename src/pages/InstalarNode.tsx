import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function InstalarNode() {
    return (
      <PageContainer title={"Instalar Node.js"} subtitle={"Pré-requisito pra qualquer projeto React moderno."} difficulty={"iniciante"} timeToRead={"5 min"}>
        <h2>Versão recomendada</h2>
      <p>Use Node 20+ (LTS). Em 2026, recomendado é Node 22 LTS.</p>
      <h2>Via nvm (Linux/macOS) — recomendado</h2>
      <CodeBlock title={"nvm"} code={"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash\nnvm install 22\nnvm use 22\nnode --version"} />
      <h2>Windows</h2>
      <p>Baixe o instalador em <strong>nodejs.org</strong> ou use <code>fnm</code> (Fast Node Manager).</p>
      <AlertBox type={"success"} title={"Use pnpm"}><span dangerouslySetInnerHTML={{__html: "Mais rápido que npm e economiza disco. Instale com <code>npm i -g pnpm</code>."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function TailwindR() {
    return (
      <PageContainer title={"Tailwind CSS"} subtitle={"Utility-first CSS — produtividade absurda em React."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"setup"} code={"pnpm add -D tailwindcss @tailwindcss/vite\n# vite.config.ts:\nimport tailwindcss from '@tailwindcss/vite';\nplugins: [react(), tailwindcss()]"} />
      <CodeBlock title={"exemplo"} code={"<button className=\"px-4 py-2 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition\">\n  OK\n</button>"} />
      <AlertBox type={"success"} title={"Tailwind v4"}><span dangerouslySetInnerHTML={{__html: "A v4 (2025+) traz config zero por padrão e CSS-first com @theme. É o que este próprio site usa."}} /></AlertBox>
      </PageContainer>
    );
  }
  
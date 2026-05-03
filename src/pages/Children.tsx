import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Children() {
    return (
      <PageContainer title="children" subtitle="A prop especial que permite composição." difficulty="iniciante" timeToRead="5 min">
        <CodeBlock title="exemplo" code="interface CardProps {\n  children: React.ReactNode;\n}\n\nfunction Card({ children }: CardProps) {\n  return <div className=\"card\">{children}</div>;\n}\n\n// Uso:\n<Card>\n  <h2>Título</h2>\n  <p>Conteúdo livre aqui</p>\n</Card>" />
      <AlertBox type="success" title="Composição > configuração">Use children sempre que possível. É mais flexível que arrays de objetos como props.</AlertBox>
      </PageContainer>
    );
  }
  
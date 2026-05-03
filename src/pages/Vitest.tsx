import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Vitest() {
    return (
      <PageContainer title={"Vitest"} subtitle={"Test runner moderno, compatível com Jest, integrado ao Vite."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"setup"} code={"pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom"} />
      <CodeBlock title={"exemplo"} code={"import { describe, it, expect } from 'vitest';\nimport { render, screen } from '@testing-library/react';\nimport { Hello } from './Hello';\n\ndescribe('Hello', () => {\n  it('renderiza nome', () => {\n    render(<Hello nome=\"Maria\" />);\n    expect(screen.getByText('Olá, Maria!')).toBeInTheDocument();\n  });\n});"} />
      <AlertBox type={"success"} title={"Pra apps Vite"}><span dangerouslySetInnerHTML={{__html: "Vitest é mais rápido que Jest e usa o mesmo config do Vite. Migração de Jest costuma ser 1-line."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactTestingLibrary() {
    return (
      <PageContainer title="React Testing Library" subtitle="Teste como o usuário usa — não como o código foi escrito." difficulty="intermediario" timeToRead="9 min">
        <CodeBlock title="exemplo" code="import { render, screen } from '@testing-library/react';\nimport userEvent from '@testing-library/user-event';\n\nit('incrementa ao clicar', async () => {\n  render(<Counter />);\n  expect(screen.getByText('0')).toBeInTheDocument();\n  await userEvent.click(screen.getByRole('button', { name: '+' }));\n  expect(screen.getByText('1')).toBeInTheDocument();\n});" />
      <AlertBox type="info" title="Use roles, não classes">Sempre prefira <code>getByRole</code>, <code>getByLabelText</code>, <code>getByText</code> — testa acessibilidade junto.</AlertBox>
      </PageContainer>
    );
  }
  
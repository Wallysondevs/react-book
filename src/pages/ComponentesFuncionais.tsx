import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ComponentesFuncionais() {
    return (
      <PageContainer title="Componentes Funcionais" subtitle="Tudo que você precisa em 2026 — hooks substituem classes." difficulty="iniciante" timeToRead="6 min">
        <CodeBlock title="exemplo" code="function Contador() {\n  const [n, setN] = useState(0);\n\n  return (\n    <div>\n      <p>Total: {n}</p>\n      <button onClick={() => setN(n + 1)}>+</button>\n    </div>\n  );\n}" />
      <AlertBox type="warning" title="Esqueça class components">Eles ainda funcionam por compatibilidade, mas não há motivo para criá-los em código novo.</AlertBox>
      </PageContainer>
    );
  }
  
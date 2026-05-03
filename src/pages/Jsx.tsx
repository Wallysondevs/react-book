import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Jsx() {
    return (
      <PageContainer title="JSX" subtitle="HTML dentro do JavaScript — açúcar sintático para React.createElement." difficulty="iniciante" timeToRead="8 min">
        <h2>Regras</h2>
      <ul>
        <li>Atributos em camelCase: <code>className</code>, <code>onClick</code>, <code>htmlFor</code></li>
        <li>Expressões dentro de chaves: <code>{nome}</code></li>
        <li>Componentes começam com letra maiúscula</li>
        <li>Sempre um único elemento raiz (use Fragment se precisar)</li>
      </ul>
      <CodeBlock title="exemplo" code="return (\n  <div className=\"card\">\n    <h2>{titulo}</h2>\n    <p>Total: {2 + 2}</p>\n    <button onClick={() => alert('oi')}>Clique</button>\n  </div>\n);" />
      <AlertBox type="info" title="JSX vira JS">Por trás dos panos vira <code>React.createElement('div', {className:'card'}, ...)</code>. Vite/Babel cuidam disso.</AlertBox>
      </PageContainer>
    );
  }
  
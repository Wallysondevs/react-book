import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ListsKeys() {
    return (
      <PageContainer title="Listas & Keys" subtitle="Renderize arrays e ajude o React a identificar cada item." difficulty="iniciante" timeToRead="7 min">
        <CodeBlock title="exemplo" code="function TodoList({ todos }) {\n  return (\n    <ul>\n      {todos.map(todo => (\n        <li key={todo.id}>\n          {todo.texto}\n        </li>\n      ))}\n    </ul>\n  );\n}" />
      <AlertBox type="warning" title="NUNCA use index como key">Se a lista for reordenada/filtrada, o React vai confundir os componentes (estado embaralhado, animações erradas). Use IDs estáveis.</AlertBox>
      </PageContainer>
    );
  }
  
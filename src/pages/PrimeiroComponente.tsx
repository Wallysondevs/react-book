import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PrimeiroComponente() {
    return (
      <PageContainer title="Primeiro Componente" subtitle="Anatomia de um componente React." difficulty="iniciante" timeToRead="5 min">
        <CodeBlock title="Hello.tsx" code="interface Props {\n  nome: string;\n}\n\nexport function Hello({ nome }: Props) {\n  return <h1>Olá, {nome}!</h1>;\n}\n\n// Uso:\n// <Hello nome=\"Maria\" />" />
      <AlertBox type="success" title="Tudo é função">Em React moderno, um componente é só uma função que retorna JSX. Esqueça classes — hooks tornaram-nas obsoletas.</AlertBox>
      </PageContainer>
    );
  }
  
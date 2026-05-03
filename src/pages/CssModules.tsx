import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CssModules() {
    return (
      <PageContainer title="CSS Modules" subtitle="Estilos com escopo automático — sem conflito de nomes." difficulty="intermediario" timeToRead="6 min">
        <CodeBlock title="botao.module.css" code=".btn {\n  background: #61DAFB;\n  padding: 8px 16px;\n  border-radius: 6px;\n}" />
      <CodeBlock title="Botao.tsx" code="import styles from './botao.module.css';\n\nexport function Botao() {\n  return <button className={styles.btn}>OK</button>;\n}" />
      <AlertBox type="info" title="Suporte nativo">Vite suporta CSS Modules out-of-the-box — basta nomear o arquivo .module.css.</AlertBox>
      </PageContainer>
    );
  }
  
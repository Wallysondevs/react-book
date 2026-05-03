import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactVsVue() {
    return (
      <PageContainer title="React vs Vue" subtitle="Comparação honesta entre as duas bibliotecas mais populares." difficulty="iniciante" timeToRead="8 min">
        <h2>Filosofia</h2>
      <ul>
        <li><strong>React</strong> — biblioteca minimalista, JSX, ecossistema decide o resto</li>
        <li><strong>Vue</strong> — framework progressivo, SFC (.vue), tudo integrado (router, state, build)</li>
      </ul>
      <h2>Sintaxe</h2>
      <CodeBlock title="react" code="function Counter() {\n  const [n, setN] = useState(0);\n  return <button onClick={() => setN(n+1)}>{n}</button>;\n}" />
      <CodeBlock title="vue" code="<script setup>\nimport { ref } from 'vue'\nconst n = ref(0)\n</script>\n<template>\n  <button @click=\"n++\">{{ n }}</button>\n</template>" />
      <AlertBox type="info" title="Qual escolher?">React tem comunidade gigantesca, mais vagas e ecossistema mais rico (Next.js, RN). Vue é mais aconchegante pra começar e tem DX excelente. Não há resposta errada.</AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Acessibilidade() {
    return (
      <PageContainer title="Acessibilidade (a11y)" subtitle="HTML semântico, ARIA, foco e teclado." difficulty="intermediario" timeToRead="9 min">
        <ul>
        <li>Use elementos semânticos (<code>button</code>, <code>nav</code>, <code>main</code>) — não <code>div</code> com onClick</li>
        <li><code>htmlFor</code> em labels associados a inputs</li>
        <li>ARIA só quando HTML não basta</li>
        <li>Foco visível e ordem de tab lógica</li>
        <li>Contraste de cor adequado (WCAG AA mínimo)</li>
      </ul>
      <AlertBox type="success" title="Ferramentas">Use <code>eslint-plugin-jsx-a11y</code> + extensão axe DevTools no browser. Pegam 80% dos problemas.</AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Acessibilidade() {
    return (
      <PageContainer title={"Acessibilidade (a11y)"} subtitle={"HTML semântico, ARIA, foco e teclado."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <ul>
        <li dangerouslySetInnerHTML={{__html: "Use elementos semânticos (<code>button</code>, <code>nav</code>, <code>main</code>) — não <code>div</code> com onClick"}} />
        <li dangerouslySetInnerHTML={{__html: "<code>htmlFor</code> em labels associados a inputs"}} />
        <li dangerouslySetInnerHTML={{__html: "ARIA só quando HTML não basta"}} />
        <li dangerouslySetInnerHTML={{__html: "Foco visível e ordem de tab lógica"}} />
        <li dangerouslySetInnerHTML={{__html: "Contraste de cor adequado (WCAG AA mínimo)"}} />
      </ul>
      <AlertBox type={"success"} title={"Ferramentas"}><span dangerouslySetInnerHTML={{__html: "Use <code>eslint-plugin-jsx-a11y</code> + extensão axe DevTools no browser. Pegam 80% dos problemas."}} /></AlertBox>
      </PageContainer>
    );
  }
  
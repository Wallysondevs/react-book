import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Portals() {
    return (
      <PageContainer title="Portals" subtitle="Renderize fora da árvore DOM do pai — útil para modals e tooltips." difficulty="intermediario" timeToRead="6 min">
        <CodeBlock title="exemplo" code="import { createPortal } from 'react-dom';\n\nfunction Modal({ children }) {\n  return createPortal(\n    <div className=\"modal\">{children}</div>,\n    document.body\n  );\n}" />
      <AlertBox type="info" title="Eventos sobem normalmente">Portals quebram a árvore DOM, mas eventos React seguem a árvore React — onClick continua propagando para o pai lógico.</AlertBox>
      </PageContainer>
    );
  }
  
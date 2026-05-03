import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Profiler() {
    return (
      <PageContainer title={"React DevTools Profiler"} subtitle={"Encontre componentes que re-renderizam demais."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <p>Instale a extensão React DevTools no Chrome/Firefox. Aba <strong>Profiler</strong> grava interações e mostra quais componentes renderizaram, quanto tempo levaram, e por quê.</p>
      <AlertBox type={"info"} title={"Highlight updates"}><span dangerouslySetInnerHTML={{__html: "Em DevTools settings, ative 'Highlight updates when components render' — você vê visualmente cada re-render piscando."}} /></AlertBox>
      </PageContainer>
    );
  }
  
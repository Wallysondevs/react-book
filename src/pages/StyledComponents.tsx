import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function StyledComponents() {
    return (
      <PageContainer title={"styled-components"} subtitle={"CSS-in-JS — escreva CSS dentro do JS."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"import styled from 'styled-components';\n\nconst Button = styled.button`\n  background: #61DAFB;\n  color: white;\n  padding: 8px 16px;\n`;\n\n<Button>OK</Button>"} />
      <AlertBox type={"warning"} title={"Performance"}><span dangerouslySetInnerHTML={{__html: "CSS-in-JS adiciona runtime cost. Em 2026, prefira Tailwind ou CSS Modules para apps grandes."}} /></AlertBox>
      </PageContainer>
    );
  }
  
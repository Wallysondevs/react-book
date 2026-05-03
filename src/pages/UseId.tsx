import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseId() {
    return (
      <PageContainer title={"useId"} subtitle={"Gera IDs estáveis para acessibilidade."} difficulty={"intermediario"} timeToRead={"4 min"}>
        <CodeBlock title={"exemplo"} code={"function Field() {\n  const id = useId();\n  return (\n    <>\n      <label htmlFor={id}>Email</label>\n      <input id={id} type=\"email\" />\n    </>\n  );\n}"} />
      <AlertBox type={"success"} title={"SSR-safe"}><span dangerouslySetInnerHTML={{__html: "useId gera IDs determinísticos no server e client — sem hydration mismatch."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ControlledUncontrolled() {
    return (
      <PageContainer title={"Controlado vs Não-controlado"} subtitle={"Quando o React é o source of truth — e quando o DOM é."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"// Controlado — React tem o valor\n<input value={v} onChange={e => setV(e.target.value)} />\n\n// Não-controlado — DOM tem o valor, lê via ref\n<input ref={ref} defaultValue=\"oi\" />\nconst valor = ref.current.value;"} />
      <AlertBox type={"info"} title={"Quando usar uncontrolled"}><span dangerouslySetInnerHTML={{__html: "Forms grandes onde performance importa, ou quando integra com libs não-React."}} /></AlertBox>
      </PageContainer>
    );
  }
  
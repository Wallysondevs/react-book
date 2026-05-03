import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Props() {
    return (
      <PageContainer title={"Props"} subtitle={"Como passar dados pai → filho."} difficulty={"iniciante"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"interface BotaoProps {\n  texto: string;\n  cor?: 'primary' | 'danger';\n  onClick: () => void;\n}\n\nfunction Botao({ texto, cor = 'primary', onClick }: BotaoProps) {\n  return (\n    <button className={`btn-${cor}`} onClick={onClick}>\n      {texto}\n    </button>\n  );\n}\n\n// Uso:\n<Botao texto=\"Salvar\" onClick={salvar} />\n<Botao texto=\"Excluir\" cor=\"danger\" onClick={excluir} />"} />
      <AlertBox type={"info"} title={"Props são imutáveis"}><span dangerouslySetInnerHTML={{__html: "Nunca mude props dentro do componente. Se precisa modificar, crie estado local com useState."}} /></AlertBox>
      </PageContainer>
    );
  }
  
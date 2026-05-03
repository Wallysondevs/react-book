import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function FormsR() {
    return (
      <PageContainer title={"Forms"} subtitle={"Inputs controlados, uncontrolled, e padrões em React."} difficulty={"iniciante"} timeToRead={"9 min"}>
        <CodeBlock title={"controlled"} code={"function Login() {\n  const [email, setEmail] = useState('');\n  const [pass, setPass] = useState('');\n\n  return (\n    <form onSubmit={enviar}>\n      <input value={email} onChange={e => setEmail(e.target.value)} />\n      <input type=\"password\" value={pass} onChange={e => setPass(e.target.value)} />\n      <button>Entrar</button>\n    </form>\n  );\n}"} />
      <AlertBox type={"info"} title={"Para forms reais"}><span dangerouslySetInnerHTML={{__html: "Use react-hook-form. Menos código, melhor performance, validação integrada."}} /></AlertBox>
      </PageContainer>
    );
  }
  
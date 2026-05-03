import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseState() {
    return (
      <PageContainer title={"useState"} subtitle={"O hook fundamental — guarda estado em componentes funcionais."} difficulty={"iniciante"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"const [n, setN] = useState(0);\n\nsetN(n + 1);                  // simples\nsetN(prev => prev + 1);       // funcional — mais seguro em updates rápidos\n\n// Estado complexo\nconst [user, setUser] = useState({ nome: '', idade: 0 });\nsetUser(prev => ({ ...prev, idade: prev.idade + 1 }));"} />
      <AlertBox type={"warning"} title={"Nunca mute objetos"}><span dangerouslySetInnerHTML={{__html: "React detecta mudança por referência. <code>user.idade++</code> NÃO dispara re-render. Sempre crie novo objeto/array."}} /></AlertBox>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Hoc() {
    return (
      <PageContainer title="Higher-Order Components" subtitle="Função que recebe componente e retorna outro com features extras." difficulty="avancado" timeToRead="6 min">
        <CodeBlock title="exemplo" code="function withLogger<P>(Component: React.ComponentType<P>) {\n  return function Wrapped(props: P) {\n    useEffect(() => {\n      console.log('[mount]', Component.displayName);\n    }, []);\n    return <Component {...props} />;\n  };\n}\n\nconst LoggedButton = withLogger(Button);" />
      <AlertBox type="info" title="Hoje em dia">Hooks substituíram a maioria dos casos de uso de HOCs. Use HOCs só quando precisar envolver a árvore (ex: error boundaries).</AlertBox>
      </PageContainer>
    );
  }
  
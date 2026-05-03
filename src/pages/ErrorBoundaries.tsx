import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ErrorBoundaries() {
    return (
      <PageContainer title={"Error Boundaries"} subtitle={"Capture erros em componentes filhos e mostre fallback."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"exemplo"} code={"class ErrorBoundary extends Component {\n  state = { error: null };\n\n  static getDerivedStateFromError(error) {\n    return { error };\n  }\n\n  render() {\n    if (this.state.error) return <h1>Algo deu errado.</h1>;\n    return this.props.children;\n  }\n}\n\n<ErrorBoundary>\n  <App />\n</ErrorBoundary>"} />
      <AlertBox type={"info"} title={"Use react-error-boundary"}><span dangerouslySetInnerHTML={{__html: "O pacote homônimo oferece versão funcional muito mais ergonômica que a class API."}} /></AlertBox>
      </PageContainer>
    );
  }
  
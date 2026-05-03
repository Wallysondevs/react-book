import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseContext() {
    return (
      <PageContainer title={"useContext"} subtitle={"Compartilhe valores sem prop drilling."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"const ThemeContext = createContext<'light' | 'dark'>('light');\n\nfunction App() {\n  return (\n    <ThemeContext.Provider value=\"dark\">\n      <Page />\n    </ThemeContext.Provider>\n  );\n}\n\nfunction Botao() {\n  const theme = useContext(ThemeContext);\n  return <button className={theme}>OK</button>;\n}"} />
      <AlertBox type={"warning"} title={"Performance"}><span dangerouslySetInnerHTML={{__html: "Toda mudança no value re-renderiza TODOS os consumers. Para estado complexo que muda muito, use Zustand/Redux em vez de Context."}} /></AlertBox>
      </PageContainer>
    );
  }
  
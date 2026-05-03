import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function CustomHooks() {
    return (
      <PageContainer title={"Custom Hooks"} subtitle={"Empacote lógica de stateful em funções reutilizáveis."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"function useLocalStorage<T>(key: string, initial: T) {\n  const [value, setValue] = useState<T>(() => {\n    const stored = localStorage.getItem(key);\n    return stored ? JSON.parse(stored) : initial;\n  });\n\n  useEffect(() => {\n    localStorage.setItem(key, JSON.stringify(value));\n  }, [key, value]);\n\n  return [value, setValue] as const;\n}\n\n// Uso:\nconst [name, setName] = useLocalStorage('name', '');"} />
      <AlertBox type={"success"} title={"Regra simples"}><span dangerouslySetInnerHTML={{__html: "Se a função usa hooks, comece o nome com 'use'. O ESLint plugin do React vai te ajudar."}} /></AlertBox>
      </PageContainer>
    );
  }
  
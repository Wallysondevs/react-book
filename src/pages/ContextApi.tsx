import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ContextApi() {
    return (
      <PageContainer title="Context API" subtitle="Estado global simples — sem libs externas." difficulty="intermediario" timeToRead="8 min">
        <CodeBlock title="exemplo" code="const AuthContext = createContext<AuthValue | null>(null);\n\nexport function AuthProvider({ children }) {\n  const [user, setUser] = useState<User | null>(null);\n  return (\n    <AuthContext.Provider value={{ user, login, logout }}>\n      {children}\n    </AuthContext.Provider>\n  );\n}\n\nexport function useAuth() {\n  const ctx = useContext(AuthContext);\n  if (!ctx) throw new Error('useAuth fora do provider');\n  return ctx;\n}" />
      <AlertBox type="warning" title="Para estado que muda muito, considere Zustand">Context re-renderiza tudo a cada mudança — ruim para estado de alta frequência.</AlertBox>
      </PageContainer>
    );
  }
  
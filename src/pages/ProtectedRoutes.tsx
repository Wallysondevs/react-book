import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ProtectedRoutes() {
    return (
      <PageContainer title={"Protected Routes"} subtitle={"Bloqueie rotas para usuários não autenticados."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"function ProtectedRoute() {\n  const { user } = useAuth();\n  return user ? <Outlet /> : <Navigate to=\"/login\" replace />;\n}\n\n<Routes>\n  <Route element={<ProtectedRoute />}>\n    <Route path=\"/dashboard\" element={<Dashboard />} />\n    <Route path=\"/conta\" element={<Conta />} />\n  </Route>\n  <Route path=\"/login\" element={<Login />} />\n</Routes>"} />
      </PageContainer>
    );
  }
  
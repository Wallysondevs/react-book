import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function NestedRoutes() {
    return (
      <PageContainer title="Nested Routes" subtitle="Layouts compartilhados via rotas aninhadas." difficulty="intermediario" timeToRead="7 min">
        <CodeBlock title="exemplo" code="<Routes>\n  <Route path=\"/dashboard\" element={<DashboardLayout />}>\n    <Route index element={<Overview />} />\n    <Route path=\"users\" element={<Users />} />\n    <Route path=\"settings\" element={<Settings />} />\n  </Route>\n</Routes>\n\n// DashboardLayout.tsx\nfunction DashboardLayout() {\n  return (\n    <>\n      <Sidebar />\n      <main><Outlet /></main>\n    </>\n  );\n}" />
      </PageContainer>
    );
  }
  
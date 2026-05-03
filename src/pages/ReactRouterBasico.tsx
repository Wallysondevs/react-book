import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactRouterBasico() {
    return (
      <PageContainer title="React Router" subtitle="O router mais usado para SPAs em React." difficulty="intermediario" timeToRead="9 min">
        <CodeBlock title="setup" code="pnpm add react-router-dom" />
      <CodeBlock title="exemplo" code="import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';\n\nfunction App() {\n  return (\n    <BrowserRouter>\n      <nav><Link to=\"/\">Home</Link> | <Link to=\"/sobre\">Sobre</Link></nav>\n      <Routes>\n        <Route path=\"/\" element={<Home />} />\n        <Route path=\"/sobre\" element={<Sobre />} />\n        <Route path=\"/user/:id\" element={<User />} />\n      </Routes>\n    </BrowserRouter>\n  );\n}\n\n// Em User:\nconst { id } = useParams();" />
      </PageContainer>
    );
  }
  
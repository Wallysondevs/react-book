import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ServerComponents() {
    return (
      <PageContainer title="Server Components" subtitle="Componentes que rodam APENAS no servidor — JS zero no client." difficulty="avancado" timeToRead="10 min">
        <CodeBlock title="exemplo" code="// app/posts/page.tsx — Server Component por padrão no Next.js\nasync function PostsPage() {\n  const posts = await db.post.findMany();\n  return (\n    <ul>\n      {posts.map(p => <li key={p.id}>{p.title}</li>)}\n    </ul>\n  );\n}\n\n// 'use client' — opt-in pra Client Component\n'use client';\nexport function LikeButton() { /* ... */ }" />
      <AlertBox type="success" title="Por que importam">Você acessa banco direto sem expor APIs. Bundle mínimo, performance excelente.</AlertBox>
      </PageContainer>
    );
  }
  
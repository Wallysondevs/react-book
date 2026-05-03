import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Streaming() {
    return (
      <PageContainer title={"Streaming SSR"} subtitle={"Renderize partes da página enquanto outras carregam."} difficulty={"avancado"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"// Em Next.js App Router\nexport default function Page() {\n  return (\n    <>\n      <Header />\n      <Suspense fallback={<Skeleton />}>\n        <SlowFeed />\n      </Suspense>\n    </>\n  );\n}"} />
      </PageContainer>
    );
  }
  
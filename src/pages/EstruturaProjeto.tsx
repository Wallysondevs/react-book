import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function EstruturaProjeto() {
    return (
      <PageContainer title={"Estrutura do Projeto"} subtitle={"O que tem dentro de um projeto Vite + React recém-criado."} difficulty={"iniciante"} timeToRead={"6 min"}>
        <CodeBlock title={"tree"} code={"meu-app/\n├── src/\n│   ├── main.tsx        # Entry point\n│   ├── App.tsx         # Root component\n│   ├── index.css       # Estilos globais\n│   └── assets/\n├── public/             # Servido como /\n├── index.html          # Template HTML\n├── vite.config.ts\n├── tsconfig.json\n└── package.json"} />
      <h2>Convenção sugerida</h2>
      <CodeBlock title={"src/"} code={"src/\n├── components/   # Componentes reutilizáveis\n├── pages/        # Páginas / rotas\n├── hooks/        # Custom hooks\n├── lib/          # Utilitários\n├── api/          # Clientes HTTP\n├── store/        # Estado global\n└── types/        # Tipos compartilhados"} />
      </PageContainer>
    );
  }
  
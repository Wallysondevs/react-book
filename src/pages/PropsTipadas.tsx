import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function PropsTipadas() {
    return (
      <PageContainer title={"Props Tipadas"} subtitle={"Interfaces, types, e tipos auxiliares do React."} difficulty={"iniciante"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"interface CardProps {\n  title: string;\n  count?: number;\n  variant?: 'primary' | 'secondary';\n  onClick: (e: React.MouseEvent) => void;\n  children: React.ReactNode;\n}\n\nfunction Card({ title, count = 0, variant = 'primary', onClick, children }: CardProps) {\n  return <div onClick={onClick}>{title} ({count}) {children}</div>;\n}"} />
      </PageContainer>
    );
  }
  
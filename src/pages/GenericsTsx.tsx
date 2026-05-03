import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function GenericsTsx() {
    return (
      <PageContainer title={"Generics em componentes"} subtitle={"Como criar componentes reutilizáveis tipo-seguros."} difficulty={"avancado"} timeToRead={"6 min"}>
        <CodeBlock title={"exemplo"} code={"interface ListProps<T> {\n  items: T[];\n  render: (item: T) => React.ReactNode;\n}\n\nfunction List<T>({ items, render }: ListProps<T>) {\n  return <ul>{items.map((item, i) => <li key={i}>{render(item)}</li>)}</ul>;\n}\n\n// Uso totalmente tipado:\n<List items={users} render={u => u.name} />"} />
      </PageContainer>
    );
  }
  
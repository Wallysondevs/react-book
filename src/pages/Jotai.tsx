import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Jotai() {
    return (
      <PageContainer title={"Jotai"} subtitle={"Estado atômico — pequenos pedaços compostos."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <CodeBlock title={"exemplo"} code={"import { atom, useAtom } from 'jotai';\n\nconst countAtom = atom(0);\nconst doubleAtom = atom(get => get(countAtom) * 2);\n\nfunction Counter() {\n  const [count, setCount] = useAtom(countAtom);\n  const [double] = useAtom(doubleAtom);\n  return <button onClick={() => setCount(c => c + 1)}>{count} → {double}</button>;\n}"} />
      </PageContainer>
    );
  }
  
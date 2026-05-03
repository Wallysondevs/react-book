import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function RenderProps() {
    return (
      <PageContainer title="Render Props" subtitle="Padrão clássico — passe uma função como prop para customizar render." difficulty="avancado" timeToRead="6 min">
        <CodeBlock title="exemplo" code="function MouseTracker({ render }) {\n  const [pos, setPos] = useState({ x: 0, y: 0 });\n  useEffect(() => {\n    const h = e => setPos({ x: e.clientX, y: e.clientY });\n    window.addEventListener('mousemove', h);\n    return () => window.removeEventListener('mousemove', h);\n  }, []);\n  return render(pos);\n}\n\n<MouseTracker render={({ x, y }) => <p>{x}, {y}</p>} />" />
      <AlertBox type="info" title="Substituído por hooks">Em 2026, custom hooks resolvem 99% dos casos onde antes você usaria render props.</AlertBox>
      </PageContainer>
    );
  }
  
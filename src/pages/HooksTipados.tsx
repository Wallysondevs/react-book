import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function HooksTipados() {
    return (
      <PageContainer title="Hooks Tipados" subtitle="Como tipar useState, useReducer, useRef." difficulty="iniciante" timeToRead="6 min">
        <CodeBlock title="exemplo" code="// useState — geralmente inferido\nconst [name, setName] = useState('');\nconst [user, setUser] = useState<User | null>(null);\n\n// useRef\nconst inputRef = useRef<HTMLInputElement>(null);\n\n// useReducer\nconst [state, dispatch] = useReducer<Reducer<State, Action>>(reducer, init);" />
      </PageContainer>
    );
  }
  
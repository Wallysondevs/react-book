import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function UseReducer() {
    return (
      <PageContainer title={"useReducer"} subtitle={"useState com esteróides — para estado complexo."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"type Action = { type: 'inc' } | { type: 'dec' } | { type: 'reset' };\n\nfunction reducer(state: number, action: Action) {\n  switch (action.type) {\n    case 'inc': return state + 1;\n    case 'dec': return state - 1;\n    case 'reset': return 0;\n  }\n}\n\nconst [count, dispatch] = useReducer(reducer, 0);\ndispatch({ type: 'inc' });"} />
      <AlertBox type={"info"} title={"Quando usar"}><span dangerouslySetInnerHTML={{__html: "Quando tem várias operações relacionadas no mesmo estado, ou quando próximo estado depende do atual de forma complexa."}} /></AlertBox>
      </PageContainer>
    );
  }
  
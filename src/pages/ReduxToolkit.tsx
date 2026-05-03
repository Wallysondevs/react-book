import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReduxToolkit() {
    return (
      <PageContainer title="Redux Toolkit" subtitle="O Redux moderno — sem boilerplate, com Immer e devtools." difficulty="intermediario" timeToRead="11 min">
        <CodeBlock title="slice" code="import { createSlice, configureStore } from '@reduxjs/toolkit';\n\nconst counter = createSlice({\n  name: 'counter',\n  initialState: 0,\n  reducers: {\n    inc: state => state + 1,\n    add: (state, action) => state + action.payload,\n  },\n});\n\nexport const { inc, add } = counter.actions;\nexport const store = configureStore({ reducer: { counter: counter.reducer } });" />
      <CodeBlock title="componente" code="const count = useSelector(s => s.counter);\nconst dispatch = useDispatch();\ndispatch(inc());\ndispatch(add(5));" />
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Emotion() {
    return (
      <PageContainer title="Emotion" subtitle="Alternativa ao styled-components com css prop." difficulty="intermediario" timeToRead="5 min">
        <CodeBlock title="exemplo" code="import { css } from '@emotion/react';\n\n<button\n  css={css`\n    background: #61DAFB;\n    padding: 8px 16px;\n    &:hover { opacity: 0.9; }\n  `}\n>\n  OK\n</button>" />
      </PageContainer>
    );
  }
  
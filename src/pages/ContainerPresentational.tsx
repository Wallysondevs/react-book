import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ContainerPresentational() {
    return (
      <PageContainer title="Container/Presentational" subtitle="Padrão clássico — separa lógica (container) de visual (presentational)." difficulty="intermediario" timeToRead="5 min">
        <p>O 'container' busca dados e gerencia estado; o 'presentational' só recebe props e renderiza. Em 2026, esse split é menos rígido — mas a ideia de separação ainda é útil.</p>
      </PageContainer>
    );
  }
  
import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function DeployVercel() {
    return (
      <PageContainer title={"Deploy na Vercel"} subtitle={"Hospedagem da Vercel — deploy em segundos."} difficulty={"iniciante"} timeToRead={"5 min"}>
        <p>Conecte seu repo GitHub na Vercel, e cada push pra main vira um deploy de produção. PRs viram preview deploys automaticamente.</p>
      <AlertBox type={"success"} title={"Para apps Next.js"}><span dangerouslySetInnerHTML={{__html: "É a casa nativa do Next.js — tudo (RSC, edge functions, image optimization) funciona out-of-the-box."}} /></AlertBox>
      </PageContainer>
    );
  }
  
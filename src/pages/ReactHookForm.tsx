import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function ReactHookForm() {
    return (
      <PageContainer title={"react-hook-form"} subtitle={"O lib de forms mais usado em React em 2026."} difficulty={"intermediario"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>();\n\nconst onSubmit = (data: FormData) => console.log(data);\n\nreturn (\n  <form onSubmit={handleSubmit(onSubmit)}>\n    <input {...register('nome', { required: 'Nome obrigatório' })} />\n    {errors.nome && <span>{errors.nome.message}</span>}\n    <button>Enviar</button>\n  </form>\n);"} />
      <AlertBox type={"success"} title={"Por que escolher"}><span dangerouslySetInnerHTML={{__html: "Não causa re-render a cada digitação (uncontrolled internamente). Performance excepcional em forms grandes."}} /></AlertBox>
      </PageContainer>
    );
  }
  
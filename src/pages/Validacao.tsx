import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Validacao() {
    return (
      <PageContainer title={"Validação"} subtitle={"Use Zod + react-hook-form para validação tipada."} difficulty={"intermediario"} timeToRead={"8 min"}>
        <CodeBlock title={"exemplo"} code={"import { z } from 'zod';\nimport { zodResolver } from '@hookform/resolvers/zod';\n\nconst schema = z.object({\n  email: z.string().email(),\n  idade: z.number().min(18),\n});\n\nfunction Form() {\n  const { register, handleSubmit, formState: { errors } } = useForm({\n    resolver: zodResolver(schema),\n  });\n  return (\n    <form onSubmit={handleSubmit(salvar)}>\n      <input {...register('email')} />\n      {errors.email && <span>{errors.email.message}</span>}\n    </form>\n  );\n}"} />
      </PageContainer>
    );
  }
  
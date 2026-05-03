import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function I18n() {
    return (
      <PageContainer title={"Internacionalização"} subtitle={"Apps em vários idiomas com react-i18next ou next-intl."} difficulty={"intermediario"} timeToRead={"7 min"}>
        <CodeBlock title={"setup"} code={"pnpm add react-i18next i18next"} />
      <CodeBlock title={"exemplo"} code={"i18n.init({\n  resources: {\n    pt: { translation: { hello: 'Olá, {{name}}!' } },\n    en: { translation: { hello: 'Hello, {{name}}!' } },\n  },\n  lng: 'pt',\n});\n\n// Componente:\nconst { t } = useTranslation();\nreturn <h1>{t('hello', { name: 'Maria' })}</h1>;"} />
      </PageContainer>
    );
  }
  
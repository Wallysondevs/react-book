import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Playwright() {
    return (
      <PageContainer title={"Playwright"} subtitle={"Testes end-to-end de verdade — Chrome, Firefox, Safari."} difficulty={"avancado"} timeToRead={"9 min"}>
        <CodeBlock title={"exemplo"} code={"import { test, expect } from '@playwright/test';\n\ntest('login flow', async ({ page }) => {\n  await page.goto('/login');\n  await page.getByLabel('Email').fill('a@b.com');\n  await page.getByLabel('Senha').fill('123');\n  await page.getByRole('button', { name: 'Entrar' }).click();\n  await expect(page.getByText('Bem-vindo')).toBeVisible();\n});"} />
      <AlertBox type={"info"} title={"Cypress vs Playwright"}><span dangerouslySetInnerHTML={{__html: "Em 2026, Playwright é a escolha mais popular: mais rápido, multi-browser nativo, melhor DX."}} /></AlertBox>
      </PageContainer>
    );
  }
  
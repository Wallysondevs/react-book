import { PageContainer } from "@/components/layout/PageContainer";
  import { CodeBlock } from "@/components/ui/CodeBlock";
  import { AlertBox } from "@/components/ui/AlertBox";

  export default function Axios() {
    return (
      <PageContainer title={"Axios"} subtitle={"Cliente HTTP popular — interceptors, transforms, cancelamento."} difficulty={"intermediario"} timeToRead={"6 min"}>
        <CodeBlock title={"cliente"} code={"import axios from 'axios';\n\nconst api = axios.create({\n  baseURL: import.meta.env.VITE_API_URL,\n  timeout: 10_000,\n});\n\napi.interceptors.request.use(config => {\n  const token = localStorage.getItem('token');\n  if (token) config.headers.Authorization = `Bearer ${token}`;\n  return config;\n});"} />
      </PageContainer>
    );
  }
  
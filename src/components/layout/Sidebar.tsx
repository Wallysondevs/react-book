import { Link } from "wouter";
  import { useHashLocation } from "wouter/use-hash-location";
  import { cn } from "@/lib/utils";
  import {
    Atom, BookOpen, Boxes, Code2, Component, Database, FileCode, FlaskConical, Gauge, Globe, Layers, Lock, Network, Package, Palette, Route, Server, Settings, Sparkles, TestTube, Wrench, Zap
  } from "lucide-react";

  const NAVIGATION = [
    {
      title: "Boas-vindas",
      items: [
        { path: "/", label: "Início", icon: Atom },
        { path: "/historia", label: "História do React", icon: BookOpen },
        { path: "/filosofia", label: "Filosofia: UI = f(state)", icon: Sparkles },
        { path: "/react-vs-vue", label: "React vs Vue", icon: BookOpen },
      ],
    },
    {
      title: "Setup",
      items: [
        { path: "/instalar-node", label: "Instalar Node", icon: Wrench },
        { path: "/create-vite", label: "Criar com Vite", icon: Wrench },
        { path: "/estrutura-projeto", label: "Estrutura do Projeto", icon: FileCode },
        { path: "/primeiro-componente", label: "Primeiro Componente", icon: Component },
      ],
    },
    {
      title: "JSX & Componentes",
      items: [
        { path: "/jsx", label: "JSX", icon: Code2 },
        { path: "/componentes-funcionais", label: "Componentes Funcionais", icon: Component },
        { path: "/props", label: "Props", icon: Code2 },
        { path: "/children", label: "children", icon: Code2 },
        { path: "/fragments", label: "Fragments", icon: Code2 },
        { path: "/conditional-rendering", label: "Render Condicional", icon: Code2 },
      ],
    },
    {
      title: "Listas",
      items: [
        { path: "/lists-keys", label: "Listas & Keys", icon: Layers },
        { path: "/keys-deep", label: "Keys: aprofundando", icon: Layers },
      ],
    },
    {
      title: "Hooks Essenciais",
      items: [
        { path: "/usestate", label: "useState", icon: Zap },
        { path: "/useeffect", label: "useEffect", icon: Zap },
        { path: "/useref", label: "useRef", icon: Zap },
        { path: "/usecontext", label: "useContext", icon: Zap },
        { path: "/usereducer", label: "useReducer", icon: Zap },
        { path: "/usememo", label: "useMemo", icon: Zap },
        { path: "/usecallback", label: "useCallback", icon: Zap },
      ],
    },
    {
      title: "Hooks Avançados",
      items: [
        { path: "/custom-hooks", label: "Custom Hooks", icon: Sparkles },
        { path: "/uselayouteffect", label: "useLayoutEffect", icon: Sparkles },
        { path: "/useimperativehandle", label: "useImperativeHandle", icon: Sparkles },
        { path: "/usetransition", label: "useTransition", icon: Sparkles },
        { path: "/usedeferredvalue", label: "useDeferredValue", icon: Sparkles },
        { path: "/useid", label: "useId", icon: Sparkles },
      ],
    },
    {
      title: "Componentes Avançados",
      items: [
        { path: "/forwardref", label: "forwardRef", icon: Component },
        { path: "/memo", label: "memo", icon: Component },
        { path: "/portals", label: "Portals", icon: Component },
        { path: "/error-boundaries", label: "Error Boundaries", icon: Component },
        { path: "/suspense", label: "Suspense", icon: Component },
      ],
    },
    {
      title: "Eventos & Forms",
      items: [
        { path: "/events", label: "Eventos", icon: Code2 },
        { path: "/forms", label: "Forms", icon: Code2 },
        { path: "/controlled-uncontrolled", label: "Controlled vs Uncontrolled", icon: Code2 },
        { path: "/validacao", label: "Validação (Zod)", icon: Code2 },
        { path: "/react-hook-form", label: "react-hook-form", icon: Code2 },
      ],
    },
    {
      title: "Estilização",
      items: [
        { path: "/css-modules", label: "CSS Modules", icon: Palette },
        { path: "/styled-components", label: "styled-components", icon: Palette },
        { path: "/tailwind", label: "Tailwind CSS", icon: Palette },
        { path: "/emotion", label: "Emotion", icon: Palette },
      ],
    },
    {
      title: "Roteamento",
      items: [
        { path: "/react-router-basico", label: "React Router", icon: Route },
        { path: "/nested-routes", label: "Nested Routes", icon: Route },
        { path: "/protected-routes", label: "Protected Routes", icon: Lock },
        { path: "/lazy-routes", label: "Lazy Routes", icon: Route },
      ],
    },
    {
      title: "Estado Global",
      items: [
        { path: "/context-api", label: "Context API", icon: Boxes },
        { path: "/redux-toolkit", label: "Redux Toolkit", icon: Boxes },
        { path: "/zustand", label: "Zustand", icon: Boxes },
        { path: "/jotai", label: "Jotai", icon: Boxes },
        { path: "/recoil", label: "Recoil", icon: Boxes },
      ],
    },
    {
      title: "Data Fetching",
      items: [
        { path: "/fetch", label: "fetch", icon: Network },
        { path: "/axios", label: "Axios", icon: Network },
        { path: "/react-query", label: "React Query", icon: Network },
        { path: "/swr", label: "SWR", icon: Network },
        { path: "/suspense-data", label: "Suspense Data", icon: Network },
      ],
    },
    {
      title: "Server & SSR",
      items: [
        { path: "/csr-vs-ssr", label: "CSR vs SSR", icon: Server },
        { path: "/nextjs-intro", label: "Next.js — Intro", icon: Server },
        { path: "/server-components", label: "Server Components", icon: Server },
        { path: "/streaming", label: "Streaming SSR", icon: Server },
      ],
    },
    {
      title: "Performance",
      items: [
        { path: "/profiler", label: "DevTools Profiler", icon: Gauge },
        { path: "/code-splitting", label: "Code Splitting", icon: Gauge },
        { path: "/virtualizacao", label: "Virtualização", icon: Gauge },
        { path: "/web-vitals", label: "Core Web Vitals", icon: Gauge },
        { path: "/react-compiler", label: "React Compiler", icon: Gauge },
      ],
    },
    {
      title: "Testes",
      items: [
        { path: "/vitest", label: "Vitest", icon: TestTube },
        { path: "/react-testing-library", label: "React Testing Library", icon: TestTube },
        { path: "/msw", label: "MSW", icon: TestTube },
        { path: "/playwright", label: "Playwright", icon: TestTube },
      ],
    },
    {
      title: "TypeScript",
      items: [
        { path: "/typescript-setup", label: "TypeScript Setup", icon: FileCode },
        { path: "/props-tipadas", label: "Props Tipadas", icon: FileCode },
        { path: "/hooks-tipados", label: "Hooks Tipados", icon: FileCode },
        { path: "/generics-tsx", label: "Generics em Componentes", icon: FileCode },
      ],
    },
    {
      title: "Build & Deploy",
      items: [
        { path: "/vite-build", label: "Build com Vite", icon: Package },
        { path: "/deploy-vercel", label: "Deploy Vercel", icon: Globe },
        { path: "/deploy-netlify", label: "Deploy Netlify", icon: Globe },
        { path: "/deploy-github-pages", label: "Deploy GitHub Pages", icon: Globe },
      ],
    },
    {
      title: "Padrões",
      items: [
        { path: "/composition", label: "Composição", icon: Settings },
        { path: "/render-props", label: "Render Props", icon: Settings },
        { path: "/hoc", label: "HOCs", icon: Settings },
        { path: "/container-presentational", label: "Container/Presentational", icon: Settings },
      ],
    },
    {
      title: "Extras",
      items: [
        { path: "/i18n", label: "i18n", icon: Globe },
        { path: "/acessibilidade", label: "Acessibilidade", icon: Sparkles },
        { path: "/referencias", label: "Referências", icon: BookOpen },
      ],
    },
  ];

  interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
  }

  export function Sidebar({ isOpen, onClose }: SidebarProps) {
    const [location] = useHashLocation();

    return (
      <>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
            onClick={onClose}
          />
        )}

        <aside
          className={cn(
            "fixed lg:sticky top-0 left-0 z-50 lg:z-0 h-screen w-72 shrink-0",
            "glass-panel border-r border-border overflow-y-auto",
            "transition-transform duration-300",
            isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
          )}
        >
          <div className="px-6 py-6 border-b border-border">
            <Link href="/" onClick={onClose}>
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-600 flex items-center justify-center text-black font-bold">
                  <Atom className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-display font-bold text-foreground leading-none">React</div>
                  <div className="text-xs text-muted-foreground mt-1">Guia em Português</div>
                </div>
              </div>
            </Link>
          </div>

          <nav className="px-3 py-4 space-y-6">
            {NAVIGATION.map((section) => (
              <div key={section.title}>
                <h3 className="px-3 mb-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  {section.title}
                </h3>
                <ul className="space-y-0.5">
                  {section.items.map((item) => {
                    const isActive = location === item.path;
                    const Icon = item.icon;
                    return (
                      <li key={item.path}>
                        <Link href={item.path} onClick={onClose}>
                          <div
                            className={cn(
                              "flex items-center gap-3 px-3 py-2 rounded-md text-sm cursor-pointer transition-colors",
                              isActive
                                ? "bg-primary/15 text-primary font-medium"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            <Icon className="w-4 h-4 shrink-0" />
                            <span>{item.label}</span>
                          </div>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </nav>
        </aside>
      </>
    );
  }
  
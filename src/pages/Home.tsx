import { Link } from "wouter";
  import {
    Atom, Wrench, Code2, Component, Zap, Sparkles, Boxes, Network, Server, Gauge, TestTube, Globe, ArrowRight, BookOpen
  } from "lucide-react";

  const STATS = [
    { v: "84", l: "Capítulos completos" },
    { v: "300+", l: "Exemplos de código" },
    { v: "100%", l: "Português BR" },
    { v: "React 19", l: "Atualizado p/ 2026" },
  ];

  const TRACKS = [
    { icon: Wrench, title: "Setup", desc: "Node, Vite, estrutura de projeto.", to: "/instalar-node" },
    { icon: Code2, title: "JSX & Componentes", desc: "Sintaxe, props, children, fragments.", to: "/jsx" },
    { icon: Zap, title: "Hooks Essenciais", desc: "useState, useEffect, useRef, useContext.", to: "/usestate" },
    { icon: Sparkles, title: "Hooks Avançados", desc: "Custom hooks, Suspense, transitions.", to: "/custom-hooks" },
    { icon: Component, title: "Padrões", desc: "Composição, render props, HOCs.", to: "/composition" },
    { icon: Boxes, title: "Estado Global", desc: "Context, Zustand, Redux Toolkit, Jotai.", to: "/zustand" },
    { icon: Network, title: "Data Fetching", desc: "React Query, SWR, Suspense para dados.", to: "/react-query" },
    { icon: Server, title: "Server & SSR", desc: "Next.js, Server Components, streaming.", to: "/server-components" },
    { icon: Gauge, title: "Performance", desc: "Profiler, code-splitting, React Compiler.", to: "/react-compiler" },
    { icon: TestTube, title: "Testes", desc: "Vitest, Testing Library, MSW, Playwright.", to: "/vitest" },
    { icon: Globe, title: "Deploy", desc: "Vercel, Netlify, GitHub Pages.", to: "/deploy-vercel" },
    { icon: BookOpen, title: "TypeScript", desc: "Props, hooks e generics tipados.", to: "/typescript-setup" },
  ];

  export default function Home() {
    return (
      <div className="px-4 sm:px-8 lg:px-16 py-10 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#61DAFB]/10 border border-[#61DAFB]/30 text-xs font-mono text-[#61DAFB] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#61DAFB] animate-pulse" />
            GUIA COMPLETO 2026 · PORTUGUÊS BR · OPEN SOURCE
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight">
            Domine o <span className="text-[#61DAFB]">React</span> em PT-BR
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            De <strong>JSX</strong> ao <strong>React Compiler</strong>: 84 capítulos, exemplos prontos, e tudo
            o que importa em 2026 — Server Components, Suspense, hooks modernos, deploys e padrões.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link href="/historia">
              <a className="inline-flex items-center gap-2 px-6 py-3 bg-[#61DAFB] hover:bg-[#7DE3FC] text-black font-bold rounded-lg transition-all">
                Começar agora <ArrowRight className="w-4 h-4" />
              </a>
            </Link>
            <Link href="/usestate">
              <a className="inline-flex items-center gap-2 px-6 py-3 border border-border hover:bg-muted text-foreground font-bold rounded-lg transition-all">
                Ir aos Hooks
              </a>
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {STATS.map((s) => (
            <div key={s.l} className="text-center p-6 rounded-xl border border-border bg-card">
              <div className="text-3xl sm:text-4xl font-display font-bold text-[#61DAFB] mb-1">{s.v}</div>
              <div className="text-xs sm:text-sm text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>

        <h2 className="text-2xl sm:text-3xl font-display font-bold mb-6 flex items-center gap-3">
          <Atom className="w-7 h-7 text-[#61DAFB]" /> Trilhas de aprendizado
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {TRACKS.map((t) => {
            const Icon = t.icon;
            return (
              <Link key={t.title} href={t.to}>
                <a className="group block p-5 rounded-xl border border-border bg-card hover:border-[#61DAFB]/50 hover:bg-card/80 transition-all">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-[#61DAFB]/10 text-[#61DAFB]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-bold mb-1 group-hover:text-[#61DAFB] transition-colors">{t.title}</h3>
                      <p className="text-sm text-muted-foreground leading-snug">{t.desc}</p>
                    </div>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }
  
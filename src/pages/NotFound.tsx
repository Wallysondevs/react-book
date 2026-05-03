import { Link } from "wouter";
  import { ArrowLeft } from "lucide-react";

  export default function NotFound() {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-4">
        <div className="text-center max-w-2xl">
          <div className="text-[8rem] font-display font-bold text-[#61DAFB] leading-none">404</div>
          <h1 className="text-2xl sm:text-3xl font-display font-bold mb-4 flex items-center justify-center gap-3">
            <span className="text-[#61DAFB]">{"<"}</span> Componente não encontrado <span className="text-[#61DAFB]">{"/>"}</span>
          </h1>
          <p className="text-muted-foreground mb-8">
            A rota que você procurou não existe — talvez o componente tenha sido renomeado ou movido.
          </p>
          <div className="rounded-xl overflow-hidden border border-border bg-card shadow-2xl text-left mb-8 max-w-xl mx-auto">
            <div className="px-4 py-2 bg-muted border-b border-border text-xs font-mono text-muted-foreground">
              App.tsx — erro
            </div>
            <pre className="p-5 text-sm font-mono text-foreground leading-relaxed">
  {`Error: No route matched for the current location.

    at Switch (App.tsx:42)
    at Router (App.tsx:18)`}
            </pre>
          </div>
          <Link href="/">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-[#61DAFB] hover:bg-[#7DE3FC] text-black font-bold rounded-lg transition-all">
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Início
            </a>
          </Link>
        </div>
      </div>
    );
  }
  
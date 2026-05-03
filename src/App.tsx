import { useState, Suspense, lazy } from "react";
  import { Switch, Route, Router as WouterRouter } from "wouter";
  import { useHashLocation } from "wouter/use-hash-location";
  import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

  import { Sidebar } from "@/components/layout/Sidebar";
  import { Header } from "@/components/layout/Header";

  import Home from "@/pages/Home";
  import NotFound from "@/pages/NotFound";

  const Historia = lazy(() => import("@/pages/Historia"));
const Filosofia = lazy(() => import("@/pages/Filosofia"));
const ReactVsVue = lazy(() => import("@/pages/ReactVsVue"));
const InstalarNode = lazy(() => import("@/pages/InstalarNode"));
const CreateVite = lazy(() => import("@/pages/CreateVite"));
const EstruturaProjeto = lazy(() => import("@/pages/EstruturaProjeto"));
const PrimeiroComponente = lazy(() => import("@/pages/PrimeiroComponente"));
const Jsx = lazy(() => import("@/pages/Jsx"));
const ComponentesFuncionais = lazy(() => import("@/pages/ComponentesFuncionais"));
const Props = lazy(() => import("@/pages/Props"));
const Children = lazy(() => import("@/pages/Children"));
const Fragments = lazy(() => import("@/pages/Fragments"));
const ConditionalRendering = lazy(() => import("@/pages/ConditionalRendering"));
const ListsKeys = lazy(() => import("@/pages/ListsKeys"));
const KeysDeep = lazy(() => import("@/pages/KeysDeep"));
const UseState = lazy(() => import("@/pages/UseState"));
const UseEffect = lazy(() => import("@/pages/UseEffect"));
const UseRef = lazy(() => import("@/pages/UseRef"));
const UseContext = lazy(() => import("@/pages/UseContext"));
const UseReducer = lazy(() => import("@/pages/UseReducer"));
const UseMemo = lazy(() => import("@/pages/UseMemo"));
const UseCallback = lazy(() => import("@/pages/UseCallback"));
const CustomHooks = lazy(() => import("@/pages/CustomHooks"));
const UseLayoutEffect = lazy(() => import("@/pages/UseLayoutEffect"));
const UseImperativeHandle = lazy(() => import("@/pages/UseImperativeHandle"));
const UseTransition = lazy(() => import("@/pages/UseTransition"));
const UseDeferredValue = lazy(() => import("@/pages/UseDeferredValue"));
const UseId = lazy(() => import("@/pages/UseId"));
const ForwardRef = lazy(() => import("@/pages/ForwardRef"));
const Memo = lazy(() => import("@/pages/Memo"));
const Portals = lazy(() => import("@/pages/Portals"));
const ErrorBoundaries = lazy(() => import("@/pages/ErrorBoundaries"));
const Suspense = lazy(() => import("@/pages/Suspense"));
const Events = lazy(() => import("@/pages/Events"));
const FormsR = lazy(() => import("@/pages/FormsR"));
const ControlledUncontrolled = lazy(() => import("@/pages/ControlledUncontrolled"));
const Validacao = lazy(() => import("@/pages/Validacao"));
const ReactHookForm = lazy(() => import("@/pages/ReactHookForm"));
const CssModules = lazy(() => import("@/pages/CssModules"));
const StyledComponents = lazy(() => import("@/pages/StyledComponents"));
const TailwindR = lazy(() => import("@/pages/TailwindR"));
const Emotion = lazy(() => import("@/pages/Emotion"));
const ReactRouterBasico = lazy(() => import("@/pages/ReactRouterBasico"));
const NestedRoutes = lazy(() => import("@/pages/NestedRoutes"));
const ProtectedRoutes = lazy(() => import("@/pages/ProtectedRoutes"));
const LazyRoutes = lazy(() => import("@/pages/LazyRoutes"));
const ContextApi = lazy(() => import("@/pages/ContextApi"));
const ReduxToolkit = lazy(() => import("@/pages/ReduxToolkit"));
const Zustand = lazy(() => import("@/pages/Zustand"));
const Jotai = lazy(() => import("@/pages/Jotai"));
const Recoil = lazy(() => import("@/pages/Recoil"));
const Fetch = lazy(() => import("@/pages/Fetch"));
const Axios = lazy(() => import("@/pages/Axios"));
const ReactQuery = lazy(() => import("@/pages/ReactQuery"));
const Swr = lazy(() => import("@/pages/Swr"));
const SuspenseData = lazy(() => import("@/pages/SuspenseData"));
const CsrVsSsr = lazy(() => import("@/pages/CsrVsSsr"));
const NextjsIntro = lazy(() => import("@/pages/NextjsIntro"));
const ServerComponents = lazy(() => import("@/pages/ServerComponents"));
const Streaming = lazy(() => import("@/pages/Streaming"));
const Profiler = lazy(() => import("@/pages/Profiler"));
const CodeSplitting = lazy(() => import("@/pages/CodeSplitting"));
const Virtualizacao = lazy(() => import("@/pages/Virtualizacao"));
const WebVitals = lazy(() => import("@/pages/WebVitals"));
const ReactCompiler = lazy(() => import("@/pages/ReactCompiler"));
const Vitest = lazy(() => import("@/pages/Vitest"));
const ReactTestingLibrary = lazy(() => import("@/pages/ReactTestingLibrary"));
const Msw = lazy(() => import("@/pages/Msw"));
const Playwright = lazy(() => import("@/pages/Playwright"));
const TypescriptSetup = lazy(() => import("@/pages/TypescriptSetup"));
const PropsTipadas = lazy(() => import("@/pages/PropsTipadas"));
const HooksTipados = lazy(() => import("@/pages/HooksTipados"));
const GenericsTsx = lazy(() => import("@/pages/GenericsTsx"));
const ViteBuild = lazy(() => import("@/pages/ViteBuild"));
const DeployVercel = lazy(() => import("@/pages/DeployVercel"));
const DeployNetlify = lazy(() => import("@/pages/DeployNetlify"));
const DeployGithubPages = lazy(() => import("@/pages/DeployGithubPages"));
const Composition = lazy(() => import("@/pages/Composition"));
const RenderProps = lazy(() => import("@/pages/RenderProps"));
const Hoc = lazy(() => import("@/pages/Hoc"));
const ContainerPresentational = lazy(() => import("@/pages/ContainerPresentational"));
const I18n = lazy(() => import("@/pages/I18n"));
const Acessibilidade = lazy(() => import("@/pages/Acessibilidade"));
const Referencias = lazy(() => import("@/pages/Referencias"));

  const queryClient = new QueryClient();

  function Router() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
      <div className="flex min-h-screen">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        <div className="flex-1 flex flex-col min-w-0">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <main className="flex-1">
            <Suspense fallback={<div className="p-12 text-center text-muted-foreground">Carregando…</div>}>
              <Switch>
                <Route path="/" component={Home} />
                <Route path="historia" component={Historia} />
              <Route path="filosofia" component={Filosofia} />
              <Route path="react-vs-vue" component={ReactVsVue} />
              <Route path="instalar-node" component={InstalarNode} />
              <Route path="create-vite" component={CreateVite} />
              <Route path="estrutura-projeto" component={EstruturaProjeto} />
              <Route path="primeiro-componente" component={PrimeiroComponente} />
              <Route path="jsx" component={Jsx} />
              <Route path="componentes-funcionais" component={ComponentesFuncionais} />
              <Route path="props" component={Props} />
              <Route path="children" component={Children} />
              <Route path="fragments" component={Fragments} />
              <Route path="conditional-rendering" component={ConditionalRendering} />
              <Route path="lists-keys" component={ListsKeys} />
              <Route path="keys-deep" component={KeysDeep} />
              <Route path="usestate" component={UseState} />
              <Route path="useeffect" component={UseEffect} />
              <Route path="useref" component={UseRef} />
              <Route path="usecontext" component={UseContext} />
              <Route path="usereducer" component={UseReducer} />
              <Route path="usememo" component={UseMemo} />
              <Route path="usecallback" component={UseCallback} />
              <Route path="custom-hooks" component={CustomHooks} />
              <Route path="uselayouteffect" component={UseLayoutEffect} />
              <Route path="useimperativehandle" component={UseImperativeHandle} />
              <Route path="usetransition" component={UseTransition} />
              <Route path="usedeferredvalue" component={UseDeferredValue} />
              <Route path="useid" component={UseId} />
              <Route path="forwardref" component={ForwardRef} />
              <Route path="memo" component={Memo} />
              <Route path="portals" component={Portals} />
              <Route path="error-boundaries" component={ErrorBoundaries} />
              <Route path="suspense" component={Suspense} />
              <Route path="events" component={Events} />
              <Route path="forms" component={FormsR} />
              <Route path="controlled-uncontrolled" component={ControlledUncontrolled} />
              <Route path="validacao" component={Validacao} />
              <Route path="react-hook-form" component={ReactHookForm} />
              <Route path="css-modules" component={CssModules} />
              <Route path="styled-components" component={StyledComponents} />
              <Route path="tailwind" component={TailwindR} />
              <Route path="emotion" component={Emotion} />
              <Route path="react-router-basico" component={ReactRouterBasico} />
              <Route path="nested-routes" component={NestedRoutes} />
              <Route path="protected-routes" component={ProtectedRoutes} />
              <Route path="lazy-routes" component={LazyRoutes} />
              <Route path="context-api" component={ContextApi} />
              <Route path="redux-toolkit" component={ReduxToolkit} />
              <Route path="zustand" component={Zustand} />
              <Route path="jotai" component={Jotai} />
              <Route path="recoil" component={Recoil} />
              <Route path="fetch" component={Fetch} />
              <Route path="axios" component={Axios} />
              <Route path="react-query" component={ReactQuery} />
              <Route path="swr" component={Swr} />
              <Route path="suspense-data" component={SuspenseData} />
              <Route path="csr-vs-ssr" component={CsrVsSsr} />
              <Route path="nextjs-intro" component={NextjsIntro} />
              <Route path="server-components" component={ServerComponents} />
              <Route path="streaming" component={Streaming} />
              <Route path="profiler" component={Profiler} />
              <Route path="code-splitting" component={CodeSplitting} />
              <Route path="virtualizacao" component={Virtualizacao} />
              <Route path="web-vitals" component={WebVitals} />
              <Route path="react-compiler" component={ReactCompiler} />
              <Route path="vitest" component={Vitest} />
              <Route path="react-testing-library" component={ReactTestingLibrary} />
              <Route path="msw" component={Msw} />
              <Route path="playwright" component={Playwright} />
              <Route path="typescript-setup" component={TypescriptSetup} />
              <Route path="props-tipadas" component={PropsTipadas} />
              <Route path="hooks-tipados" component={HooksTipados} />
              <Route path="generics-tsx" component={GenericsTsx} />
              <Route path="vite-build" component={ViteBuild} />
              <Route path="deploy-vercel" component={DeployVercel} />
              <Route path="deploy-netlify" component={DeployNetlify} />
              <Route path="deploy-github-pages" component={DeployGithubPages} />
              <Route path="composition" component={Composition} />
              <Route path="render-props" component={RenderProps} />
              <Route path="hoc" component={Hoc} />
              <Route path="container-presentational" component={ContainerPresentational} />
              <Route path="i18n" component={I18n} />
              <Route path="acessibilidade" component={Acessibilidade} />
              <Route path="referencias" component={Referencias} />
                <Route component={NotFound} />
              </Switch>
            </Suspense>
          </main>
        </div>
      </div>
    );
  }

  export default function App() {
    return (
      <QueryClientProvider client={queryClient}>
        <WouterRouter hook={useHashLocation}>
          <Router />
        </WouterRouter>
      </QueryClientProvider>
    );
  }
  
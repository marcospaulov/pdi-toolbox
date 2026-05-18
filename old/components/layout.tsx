import { ReactNode } from "react";

type LayoutProps = {
  children?: ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <>
      <header className="flex items-center justify-center w-full h-16 text-xl font-bold shadow-lg bg-gradient-to-r text-slate-100 from-slate-800 to-slate-900">
        <h1 className="flex items-center gap-2">
          Processamento Digital de Imagens
        </h1>
      </header>
      {children}
      <footer className="flex flex-col items-center justify-center w-full h-16 text-base bg-gradient-to-r from-slate-800 to-slate-900 text-slate-300">
        <div>&copy; 2024 - Processamento Digital de Imagens</div>
        <div className="text-sm text-slate-400">
          Desenvolvido por Marcos Paulo, Luciano, Gabriel
        </div>
      </footer>
    </>
  );
}

export default Layout;

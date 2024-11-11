import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Footer } from "./_components/Footer";
import { Navbar } from "./_components/Navbar";

interface PropsWithChildren {
  children: React.ReactNode;
}
const layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      forcedTheme="light"
    >
      <div className="h-full bg-slate-100">
        <Navbar />
        <main className="pt-40 pb-20 bg-slate-100">{children}</main>
      <Footer />
      </div>
    </ThemeProvider>
  );
};

export default layout;

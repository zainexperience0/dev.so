import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full p-4 border-t bg-slate-100">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
          <h1 className="md:text-4xl text-2xl font-bold">
            Dev<span className="text-primary font-extrabold">.</span>so
          </h1>
        <div className="space-x-4 md:block md:w-auto flex items-center justify-between w-full">
          <Link
            href="#"
            className={buttonVariants({ size: "sm", variant: "ghost" })}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            className={buttonVariants({ size: "sm", variant: "ghost" })}
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
};

import { initialCommunity } from "@/actions/community";
import { buttonVariants } from "@/components/ui/button";
import { Github } from "lucide-react";
import Link from "next/link";

export const Navbar = async () => {
  const community = await initialCommunity();
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-sm bg-white flex items-center">
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <h1 className="md:text-4xl text-2xl font-bold">
          Dev<span className="text-primary font-extrabold">.</span>so
        </h1>
        <div className="space-x-4 md:w-auto flex items-center justify-between w-full">
          {community ? (
            <>
              <Link
                href={community ? `/${community.url}` : "/community/new"}
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                {community ? "Enter" : "Get Started"}
              </Link>
            </>
          ) : (
            <>
              <Link
                href="auth/sign-in"
                className={buttonVariants({ size: "sm", variant: "outline" })}
              >
                Login
              </Link>
            </>
          )}
          <Link
            href="https://github.com/sanidhyy/trello-clone"
            target="_blank"
            rel="noreferrer noopener"
            className={buttonVariants({ size: "sm", variant: "secondary" })}
          >
            <Github className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

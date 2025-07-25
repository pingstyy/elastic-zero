import { ModeToggle } from "./theme-toggle";
import { GithubIcon, TwitterIcon, CommandIcon, LinkedinIcon } from "lucide-react";

import { buttonVariants } from "./ui/button";
import Anchor from "./anchor";
import { SheetLeftbar } from "./leftbar";
import { page_routes } from "~/lib/routes-config";
import { SheetClose } from "~/components/ui/sheet";
import { Link } from "react-router";
// import AlgoliaSearch from "./algolia-search";

export const NAVLINKS = [
  {
    title: "Documentation",
    href: `/docs${page_routes[0].href}`,
  },
  {
    title: "Blogs",
    href: "/blog",
  },
  // {
  //   title: "Examples",
  //   href: "#",
  // },
  // {
  //   title: "Guides",
  //   href: "#",
  // },

];

// const algolia_props = {
//   appId: process.env.ALGOLIA_APP_ID!,
//   indexName: process.env.ALGOLIA_INDEX!,
//   apiKey: process.env.ALGOLIA_SEARCH_API_KEY!,
// };

export function Navbar() {
  return (
    <nav className="w-full border-b h-16 sticky top-0 z-50 bg-background">
      <div className="sm:container mx-auto w-[95vw] h-full flex items-center sm:justify-between md:gap-2">
        <div className="flex items-center sm:gap-5 gap-2.5">
          <SheetLeftbar />
          <div className="flex items-center gap-6">
            <div className="lg:flex hidden">
              <Logo />
            </div>
            <div className="md:flex hidden items-center gap-4 text-sm font-medium text-muted-foreground">
              <NavMenu />
            </div>
          </div>
        </div>

        <div className="flex items-center sm:justify-normal justify-between sm:gap-3 ml-1 sm:w-fit w-[90%]">
          <div></div>
          {/* <AlgoliaSearch {...algolia_props} /> */}
          <div className="flex items-center justify-between sm:gap-2">
            <div className="flex ml-4 sm:ml-0">
              <Link
                to="https://github.com/sp4s-s"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <GithubIcon className="!h-[1.1rem] !w-[1.1rem]" />
              </Link>
              <Link
                to="https://x.com/Spass4444"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <TwitterIcon className="!h-[1.1rem] !w-[1.1rem]" />
              </Link>
              <Link 
              to="https://www.linkedin.com/in/shubhankar-mahanta-076019224"
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
              <LinkedinIcon className="!h-[1.1rem] !w-[1.1rem]"/>
              </Link>
              <ModeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <CommandIcon className="w-6 h-6 text-muted-foreground" strokeWidth={2} />
      <h2 className="text-3xl font-bold font-code">Ml`Journal</h2>
    </Link>
  );
}

export function NavMenu({ isSheet = false }) {
  return (
    <>
      {NAVLINKS.map((item) => {
        const Comp = (
          <Anchor
            key={item.title + item.href}
            activeClassName="!text-primary dark:font-medium font-semibold"
            absolute
            className="flex items-center gap-1 sm:text-sm text-[14.5px] dark:text-stone-300/85 text-stone-800"
            to={item.href}
          >
            {item.title}
          </Anchor>
        );
        return isSheet ? (
          <SheetClose key={item.title + item.href} asChild>
            {Comp}
          </SheetClose>
        ) : (
          Comp
        );
      })}
    </>
  );
}

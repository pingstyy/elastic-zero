import { buttonVariants } from "~/components/ui/button";
import { MoveUpRightIcon, TerminalSquareIcon } from "lucide-react";
import type { Route } from "./+types/home";
import { Link } from "react-router";
import { page_routes } from "~/lib/routes-config";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Elastic-Zero" },
    {
      name: "Machine Learning implementation docsheet",
      content:
        "Combination of  elastic reasoning and scalable chain-of-thought (CoT) to solve complex problems with precision and flexibility. Designed for next-generation machine intelligence, Absolute Zero enables adaptive task solving, robust inference, and efficient knowledge integration. ",
    },
  ];
}

export default function Home() {
  return (
    <div className="flex sm:min-h-[87.5vh] min-h-[82vh] flex-col sm:items-center justify-center text-center sm:py-8 py-12">
      <Link
        to="https://github.com/sp4s-s"
        target="_blank"
        className="mb-5 sm:text-lg flex items-center gap-2 underline underline-offset-4 sm:-mt-12"
      >
        Follow along on GitHub{" "}
        <MoveUpRightIcon className="w-4 h-4 font-extrabold" />
      </Link>
      <h1 className="text-[2.4rem] sm:px-8 leading-10 sm:leading-[4.5rem] font-bold mb-2 sm:text-6xl text-left sm:text-center">
        Elastic Reasoning & Absolute Zero:
      </h1>

      <h4 className="text-[0.8rem] sm:text-2xl font-semibold text-left sm:text-center mb-4">
        A Unified Diary for ML Research & Experimentation
      </h4>

      <span className="text-5xl block text-left sm:text-center">∴</span>


      <p className="mb-8 sm:text-lg max-w-[1200px] text-muted-foreground text-left sm:text-center">
        Explore the implementation and insights of cutting-edge research in <strong>elastic reasoning</strong> and <strong>absolute zero</strong>, along with other ml tailored sub programms including <code>ORPO</code>, <code>GRPO</code>, reinforcement learning strategies, and structured project findings.
        <br />
        {/* This reproducible research platform is optimized for <strong>extensibility</strong> and <strong>clarity</strong>—ideal for publishing results, documenting training cycles, and showcasing experimental breakthroughs across diverse machine learning domains. */}
      </p>
      <div className="sm:flex sm:flex-row grid grid-cols-2 items-center sm;gap-5 gap-3 mb-8">
        <Link
          to={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Stared
        </Link>
        
        <Link
          to="/blog"
          className={buttonVariants({
            variant: "secondary",
            className: "px-6",
            size: "lg",
          })}
        >
          Read Blog
        </Link>
      </div>
      <span className="sm:flex hidden flex-row items-start sm:gap-2 gap-0.5 text-muted-foreground text-md mt-9 -mb-12 max-[800px]:mb-12 font-code sm:text-base text-sm font-medium border rounded-full p-2.5 px-5 bg-muted/55">
        <TerminalSquareIcon className="w-5 h-5 sm:mr-1 mt-0.5" />
        {"uv pip install -r requirements.txt && poetry run python main.py "}
      </span>
    </div>
  );
}

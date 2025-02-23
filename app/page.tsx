"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SiChakraui,
  SiPostgresql,
  SiReact,
  SiTypescript,
  SiGraphql,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiTwitter,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiPrisma,
  SiSupabase,
  SiTailwindcss,
  SiOpenai,
} from "react-icons/si";

const STACK_TO_ICON: any = {
  react: SiReact,
  nextjs: SiNextdotjs,
  nodejs: SiNodedotjs,
  typescript: SiTypescript,
  graphql: SiGraphql,
  mongodb: SiMongodb,
  posgresql: SiPostgresql,
  chakraui: SiChakraui,
  html: SiHtml5,
  css: SiCss3,
  js: SiJavascript,
} as const;

import cn from "classnames";

import Container from "./components/container";
import BlogPostCard from "./components/blogCard";
import ExternalLink from "./components/link";
export default function Home() {
  const career = [
    {
      title: "Fetcch Labs",
      description: `We are a research firm building tools for a decentralised, autonomous future.`,
      time: "Apr 24 - Present",
      type: "Fullstack Engineer",
      url: "https://fetcch.xyz/",
      logo: "/fetcch.png",
    },
    {
      title: "Aeos Labs",
      description: `We build generative AI applications and automate workflows for businesses. Currently experimenting with open-source models, AI tools, and building internal tools for the company.`,
      time: "July 23 - March 24",
      type: "Fullstack Engineer",
      url: "https://labs.aeoscompany.com/",
      logo: "/aeos.png",
    },
    // {
    //   title: "Strivio Fit",
    //   description:
    //     "I worked as a freelancer and developed the frontend UI for the user and admin interfaces.",

    //   time: "3 months",
    //   type: "Freelance Frontend Developer",
    //   url: "https://strivio.fit/",
    //   logo: "https://media.licdn.com/dms/image/C4D0BAQEV-ilmfs0PGg/company-logo_200_200/0/1649214743339?e=1717632000&v=beta&t=U6Hm1VMaJhMn6By153C5L7LBTQrUbV92GEJCl6I0G98",
    // },
  ];
  const redGradient =
    "bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-transparent bg-clip-text";

  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="w-full justify-between flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col">
            <h1 className="font-bold text-3xl md:text-4xl tracking-tight mb-1 text-black dark:text-white">
              Nada Farook
            </h1>

            <p className="text-gray-600 dark:text-gray-400 text-md mt-4 pr-8">
              21 |{" "}
              <span
                className={cn(
                  redGradient,
                  "transition-transform duration-500 ease-in-out hover:duration-300"
                )}
              >
                {" "}
                Fullstack Engineer{" "}
              </span>{" "}
              | JS, TS, Next & AI
            </p>
            <span className="h-8" />
            <div className="mt-3 text-gray-600 dark:text-gray-400 mb-16 ">
              <h2 className="text-gray-700 dark:text-gray-300 text-md mb-4">
                My tech stack includes but not limited to:
              </h2>
              <div className="mt-2 flex flex-wrap gap-4">
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTypescript color={"#61DBFB"} />
                  <p>Typescript</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiNextdotjs className="text-black dark:text-white" />
                  <p>NextJS</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiSupabase color={"#61DBFB"} />
                  <p>Supabase</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiPrisma color={"#61DBFB"} />
                  <p>Prisma</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiNodedotjs color={"#61DBFB"} />
                  <p>Node.js</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiPostgresql color={"#61DBFB"} />
                  <p>PostgreSQL</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiOpenai color={"#61DBFB"} />
                  <p>OpenAI</p>
                </div>
                <div className="inline-flex items-center space-x-2 mr-2">
                  <SiTailwindcss color={"#4fd1c5"} />
                  <p>Tailwind</p>
                </div>
              </div>
            </div>
          </div>
          <div className=" sm:w-[176px] relative mb-8 sm:mb-0">
            <Image
              alt="Nada Farook"
              height={120}
              width={120}
              src="/avatar.png"
              sizes="30vw"
              priority
              className="rounded-full filter grayscale ml-auto"
            />
          </div>
        </div>
        <div>
          <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
            Work Experience
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            My work experience so far.
          </p>
          <ul className="w-full ">
            {career.map((c, index) => (
              <CareerCard
                key={index}
                last={index === career.length - 1}
                career={c}
              />
            ))}
          </ul>
        </div>
        <span className="h-8" />

        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-4 mt-16 text-black dark:text-white">
          Projects
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">
          I created a few projects to learn more about the technologies I use.
          You can check them out here. Let me know what you think!
        </p>
        <div className="w-full">
          {/* <ProjectCard
            href="https://mygptbrain.com/"
            title="MyGPTBrain"
            brandColor={"#ffffff"}
            projectLogo={"/gpt.svg"}
            stack={["nextjs", "chakraui", "typescript"]}
            description="An AI assistant that could answer questions, contextualize your bookmarks, sync with notion tables, drive files, pocket articles, & much more. 💁‍♂️✨"
            footerNote="Was responsible for the whole frontend side of it"
            link={true}
          />

          <ProjectCard
            href="https://www.declutr.xyz/naddy"
            title="Declutr"
            brandColor={"#1DA1F2"}
            projectLogo={SiTwitter}
            stack={["nextjs", "react", "nodejs", "chakraui"]}
            footerNote="Has over 250+ users"
            description="A social bookmarking experience for people who like to share knowledge."
            link={false}
          /> */}

          <ProjectCard
            href="https://github.com/MetaMove/move-agent-kit"
            title="Move AI Agent Kit"
            brandColor={"#ff3310"}
            projectLogo={"/metamove.png"}
            stack={["nextjs", "typescript"]}
            description="Move Agent Kit is a comprehensive toolkit designed to simplify AI agents' interactions with Move-based blockchains. It provides a unified interface for performing various blockchain operations, making it easier for developers to build AI-powered applications that can interact with different Move-based protocols and applications."
            link={true}
          />
          <ProjectCard
            href="https://audionotes.app/"
            title="Audionotes"
            brandColor={"#ff3310"}
            projectLogo={"/audionotes.png"}
            stack={["nextjs", "typescript"]}
            description="Audionotes capture and turn your voice recordings, text notes, images, audio files, and YouTube videos into perfect notes for meetings, journals, lectures, emails, and more!"
            link={true}
          />

          <ProjectCard
            href="https://www.packagedesign.app/"
            title="Package Design"
            brandColor={"#ffffff"}
            projectLogo={"/package.png"}
            stack={["nextjs", "typescript"]}
            description="PackageDesign turns ideas into package designs powered by AI.
Generate product packaging designs tailored to your theme & style.
Ideal for designers seeking inspiration and efficiency."
            link={true}
            footerNote="Built the whole UI and integration for it"
          />
          <ProjectCard
            href="https://github.com/neogcamp/mockman"
            title="Mockman"
            projectLogo={
              "https://github.com/neogcamp/mockman/raw/main/src/assets/Mockman.png"
            }
            brandColor={"#1DA1F2"}
            stack={["html", "css", "js"]}
            footerNote="Mockman was one of the internal tool I made which is used 1000+ times."
            description="MockmanJS gives plug and play React Component to test your fake mock-backend APIs."
            link={true}
          />
          {/* <ProjectCard
            href="https://strivio.fit/"
            title="Strivio"
            brandColor={"#ffffff"}
            projectLogo={"/favicon.svg"}
            stack={["react", , "html", "css", "chakraui"]}
            description="Strivio is built to help you find your version of success though fitness."
            footerNote="* Freelance Project"
            link={true}
          /> */}
        </div>

        <span className="h-16" />
        <h3 className="font-bold text-2xl md:text-3xl tracking-tight mb-6 text-black dark:text-white">
          Featured Posts
        </h3>
        <div className="flex gap-2 flex-col md:flex-row">
          <BlogPostCard
            title="Introduction to Typescript"
            slug="https://nadaa.hashnode.dev/introduction-to-typescript"
            gradient="from-[#D8B4FE] to-[#818CF8]"
          />
          <BlogPostCard
            title="A detailed guide to start with WEB DEVELOPMENT"
            slug="https://nadaa.hashnode.dev/a-detailed-guide-to-start-with-web-development"
            gradient="from-[#6EE7B7] via-[#3B82F6] to-[#9333EA]"
          />
          <BlogPostCard
            title="Some Lesser Known HTML Tags Worth Knowing"
            slug="https://nadaa.hashnode.dev/some-lesser-known-html-tags-worth-knowing"
            gradient="from-[#FDE68A] via-[#FCA5A5] to-[#FECACA]"
          />
        </div>
      </div>
    </Container>
  );
}
const CareerCard = ({ career, last }: { career: any; last: any }) => {
  const { title, description, time, type, url, logo } = career;
  return (
    <li className=" transform hover:scale-[1.01] transition-all border my-5 dark:border-gray-700 p-4 rounded-lg animate-scale">
      <div className="relative">
        {!last && (
          <span
            className="hidden md:block absolute top-4 left-3 md:left-5 h-full w-0.5 bg-accent"
            aria-hidden="true"
          />
        )}
        <div className="relative flex items-start md:space-x-3">
          <img
            className="items-center justify-center hidden w-6 h-6 rounded-full md:flex md:w-10 md:h-10"
            src={logo}
            alt="career"
          />
          <div className="w-full">
            <div className="flex items-center justify-between">
              <ExternalLink
                href={url}
                className="flex flex-col md:flex-row space-y-1 md:space-y-0"
              >
                <span className="text-lg font-medium text-gray-900 dark:text-gray-200">
                  {type}
                </span>
              </ExternalLink>
              <p className="text-sm text-secondary text-gray-500">{time}</p>
            </div>
            <p className="text-gray-500 text-sm mt-1 md:mt-0">{title}</p>
            <p className="mb-1.5 mt-2 prose text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

function ProjectCard({
  title,
  link,
  description,
  href,
  projectLogo,
  stack,
  brandColor,
  footerNote = "",
}: {
  title: string;
  link: boolean;
  description: string;
  href: string;
  projectLogo: any;
  stack: (string | undefined)[];
  brandColor: string;
  footerNote?: string;
}) {
  const Logo = projectLogo;
  return (
    <Link href={href} passHref aria-label={title}>
      <div className=" my-6 transform hover:scale-[1.01] transition-all bg-white dark:bg-gray-900 w-full flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded p-4">
        <div className="flex flex-col gap-4">
          <div className="min-w-[5%] h-full flex flex-col mr-auto">
            <span className="sr-only">{title}</span>
            {title == "MyGPTBrain" ? (
              <img
                src={Logo}
                style={{ color: brandColor }}
                className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100 mt-0"
              />
            ) : link == true ? (
              <img
                src={Logo}
                style={{ color: brandColor }}
                className="h-8 w-8 min-w-sm text-gray-900 dark:text-gray-100 rounded-full"
              />
            ) : (
              <Logo />
            )}
          </div>
          <div>
            <div className="flex space-x-2">
              <h4 className="text-lg font-bold tracking-tight text-gray-900 dark:text-gray-100">
                {title}
              </h4>
            </div>
            <p className="leading-6 font-light text-gray-700 dark:text-gray-300 ">
              {description}
            </p>
            <div className="flex flex-wrap mt-2 gap-2">
              {stack.map((stackItem, idx) => {
                // @ts-ignore
                const Icon = STACK_TO_ICON[stackItem];
                return (
                  <span
                    key={idx}
                    className="inline-flex items-center py-1 text-xs font-semibold opacity-60 text-gray-600 dark:text-gray-300"
                  >
                    <span className="mr-1">
                      <Icon className="h-4 w-4" />
                    </span>
                    <p className="text-xs font-light capitalize">
                      {" "}
                      {stackItem}
                    </p>
                  </span>
                );
              })}
            </div>
            {footerNote && (
              <p className="mt-2 text-xs font-light text-gray-500 dark:text-gray-500">
                {footerNote}
              </p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

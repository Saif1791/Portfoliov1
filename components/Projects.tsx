import { projects } from "@/data";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3dCard";
import Image from "next/image";
import Link from "next/link";
import { AnimatedTooltip } from "@/components/ui/Tooltip";

const Projects = () => {
  return (
    <main className="my-20" id="projects">
      <h1 className="text-2xl md:text-4xl text-center font-bold">
        Fresh Off the <span className="text-purple">Development Desk</span>
      </h1>
      <div className="flex flex-wrap justify-center gap-x-16">
        {projects.map((project) => (
          <CardContainer key={project.id}>
            <CardBody className="relative group/card dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[30rem] h-full rounded-xl p-6 border">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {project.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2"
              >
                {project.des}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-12">
                <Image
                  src={project.img}
                  height="10000"
                  width="10000"
                  className="h-60 w-full object-contain rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                <CardItem
                  translateZ={20}
                  as={Link}
                  href={project.link}
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal text-white"
                >
                  Visit now →
                </CardItem>
                <CardItem translateZ={20} as="button" className="flex flex-row">
                  <AnimatedTooltip items={project.iconLists} />
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </main>
  );
};

export default Projects;

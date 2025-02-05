import React from "react";
import { Timeline } from "@/components/ui/Timeline";
import { workExperience } from "@/data/index";

export function WorkExperience() {
  return (
    <main className="w-full flex justify-center items-center" id="work">
      <Timeline data={workExperience} />
    </main>
  );
}

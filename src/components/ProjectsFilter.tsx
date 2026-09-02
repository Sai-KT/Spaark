"use client";

import { useState } from "react";
import { projectsData, ProjectItem } from "@/data/projects";
import ProjectCard from "./ProjectCard";

const filterTabs = [
  { id: "all", label: "All Projects" },
  { id: "cctv", label: "CCTV & Surveillance" },
  { id: "fire-alarm", label: "Fire Alarm Systems" },
  { id: "av-boardroom", label: "AV & Smart Displays" },
  { id: "access-telecom", label: "Access & EPABX" },
  { id: "workplace", label: "Workplace Solutions" },
];

export default function ProjectsFilter() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects =
    activeTab === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === activeTab);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {filterTabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition ${
              activeTab === tab.id
                ? "bg-navy-900 text-white shadow-md shadow-navy-900/20"
                : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

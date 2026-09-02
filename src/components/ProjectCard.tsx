import { ProjectItem } from "@/data/projects";
import { CheckCircle, MapPin, Building, Wrench } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-navy-50 text-navy-800 border border-navy-100">
            {project.categoryLabel}
          </span>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 text-amber-500" />
            <span>{project.location}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg font-bold text-slate-900 group-hover:text-navy-900 transition mb-2">
          {project.title}
        </h3>

        {/* Client & Scale */}
        <div className="text-xs text-slate-500 mb-4 pb-4 border-b border-slate-100 space-y-1">
          <div className="flex items-center gap-1.5 font-medium text-slate-700">
            <Building className="h-3.5 w-3.5 text-slate-400" />
            {/* PLACEHOLDER: client type and placeholder */}
            <span>
              {project.clientPlaceholder} ({project.clientIndustry})
            </span>
          </div>
          <div className="text-[11px] text-slate-500">
            Scope: <span className="font-semibold text-slate-700">{project.scale}</span>
          </div>
        </div>

        {/* Problem -> Solution Summary */}
        <div className="space-y-2.5 text-xs text-slate-600 mb-5">
          <p>
            <strong className="text-slate-800 font-semibold block mb-0.5">Challenge:</strong>
            {project.challenge}
          </p>
          <p>
            <strong className="text-slate-800 font-semibold block mb-0.5">Solution:</strong>
            {project.solution}
          </p>
        </div>

        {/* Key Outcomes */}
        <div className="mb-5 bg-slate-50 rounded-xl p-3.5 border border-slate-100">
          <span className="text-[11px] font-bold text-slate-900 uppercase tracking-wider block mb-2">
            Key Outcomes
          </span>
          <ul className="space-y-1.5 text-xs text-slate-700">
            {project.keyOutcomes.slice(0, 3).map((outcome, idx) => (
              <li key={idx} className="flex items-start gap-1.5">
                <CheckCircle className="h-3.5 w-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Equipment Installed */}
      <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 flex items-start gap-1.5">
        <Wrench className="h-3.5 w-3.5 text-amber-500 shrink-0 mt-0.5" />
        <div className="line-clamp-2">
          <span className="font-semibold text-slate-700">Deployed: </span>
          {project.equipmentInstalled.join(" • ")}
        </div>
      </div>
    </div>
  );
}

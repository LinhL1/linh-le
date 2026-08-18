import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

import type { Project } from "@/data/projects";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";

interface ProjectDetailDialogProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

const linkLabel = (link: string) =>
  link.includes("github.com") ? "View Repo" : "View Live";

const ProjectDetailDialog = ({ project, onOpenChange }: ProjectDetailDialogProps) => {
  // Keep the last project rendered while the dialog opens/plays its close animation,
  // instead of unmounting the content for a frame the moment `project` changes or goes null.
  const [lastProject, setLastProject] = useState<Project | null>(null);
  if (project && project !== lastProject) {
    setLastProject(project);
  }
  const displayProject = project ?? lastProject;

  return (
    <Dialog open={!!project} onOpenChange={onOpenChange}>
      <DialogContent className="block max-w-3xl w-[calc(100%-2rem)] max-h-[85vh] overflow-y-auto p-0 gap-0">
        {displayProject && (
          <>
            <DialogTitle className="sr-only">{displayProject.title}</DialogTitle>
            <DialogDescription className="sr-only">{displayProject.description}</DialogDescription>

            {displayProject.image && (
              <div className="w-full aspect-video overflow-hidden bg-muted">
                <img
                  src={displayProject.image}
                  alt={displayProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="px-8 py-8 md:px-10 md:py-10">
              <p className="editorial-label mb-2">
                {displayProject.type} &nbsp;·&nbsp; {displayProject.year}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground mb-8">
                {displayProject.title}
              </h2>

              {displayProject.caseStudy ? (
                <div className="space-y-7">
                  <div>
                    <p className="editorial-label mb-2">My Role</p>
                    <p className="font-body text-base text-foreground leading-relaxed">
                      {displayProject.caseStudy.role}
                    </p>
                  </div>
                  <div>
                    <p className="editorial-label mb-2">The Problem</p>
                    <p className="font-body text-base text-foreground leading-relaxed">
                      {displayProject.caseStudy.problem}
                    </p>
                  </div>
                  <div>
                    <p className="editorial-label mb-2">Approach</p>
                    <ul className="space-y-2">
                      {displayProject.caseStudy.approach.map((step, i) => (
                        <li
                          key={i}
                          className="font-body text-base text-foreground leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-muted-foreground"
                        >
                          {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="editorial-label mb-2">Impact</p>
                    <p className="font-body text-base text-foreground leading-relaxed">
                      {displayProject.caseStudy.impact}
                    </p>
                  </div>
                </div>
              ) : (
                <p className="font-body text-base text-foreground leading-relaxed">
                  {displayProject.description}
                </p>
              )}

              {!!displayProject.tools?.length && (
                <div className="mt-8 pt-6 border-t border-border flex flex-wrap gap-x-3 gap-y-1">
                  {displayProject.tools.map((tool) => (
                    <span
                      key={tool}
                      className="font-sans text-[10px] uppercase tracking-widest text-foreground/70"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              )}

              {displayProject.link && (
                <a
                  href={displayProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-sans text-xs uppercase tracking-[0.15em] text-foreground hover:text-muted-foreground transition-colors"
                >
                  {linkLabel(displayProject.link)}
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailDialog;

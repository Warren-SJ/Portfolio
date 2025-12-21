import React from 'react';

import { PCBBackground } from './components/pcb-background';
import { certifications, education, experience, profile, projects, volunteerText } from './data/portfolio';

import { CertificationsSection } from './sections/certifications';
import { EducationSection } from './sections/education';
import { ExperienceSection } from './sections/experience';
import { FooterSection } from './sections/footer';
import { HeroSection } from './sections/hero';
import { ObjectiveSection } from './sections/objective';
import { ProjectsSection } from './sections/projects';
import { SiteNav } from './sections/site-nav';
import { VolunteerSection } from './sections/volunteer';

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-200 selection:bg-blue-500/30 font-sans overflow-x-hidden">
      <PCBBackground />
      <SiteNav email={profile.email} />
      <HeroSection profile={profile} />
      <ObjectiveSection objective={profile.objective} />
      <ExperienceSection experience={experience} />
      <ProjectsSection profile={profile} projects={projects} />
      <EducationSection education={education} />
      <CertificationsSection certifications={certifications} />
      <VolunteerSection text={volunteerText} />
      <FooterSection profile={profile} />
    </div>
  );
}
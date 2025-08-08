"use client";

import { useState } from "react";
import Image from "next/image";
import Title from "./shared/title";
import {
  UserRound,
  Wrench,
  Grid2X2,
  Dot,
  Cpu,
  Boxes,
  Database,
  AppWindow,
} from "lucide-react";

type TabKey = "presentation" | "skills" | "tools" | "apps";
type SkillSub = "langs" | "frameworks" | "dbs" | "tools";

const tabs: { key: TabKey; label: string; icon: React.ReactNode }[] = [
  { key: "presentation", label: "Presentation", icon: <UserRound size={14} /> },
  { key: "skills", label: "Skills", icon: <Cpu size={14} /> },
  { key: "tools", label: "Tools", icon: <Wrench size={14} /> },
  { key: "apps", label: "Apps", icon: <Grid2X2 size={14} /> },
];

const skillSubTabs: { key: SkillSub; label: string; icon: React.ReactNode }[] = [
  { key: "langs", label: "Langs", icon: <Cpu size={12} /> },
  { key: "frameworks", label: "Frameworks", icon: <Boxes size={12} /> },
  { key: "dbs", label: "DBs", icon: <Database size={12} /> },
  { key: "tools", label: "Tools", icon: <Wrench size={12} /> },
];

const AboutMe = () => {
  const [active, setActive] = useState<TabKey>("presentation");
  const [skillTab, setSkillTab] = useState<SkillSub>("langs");

  return (
    <div className="space-y-10" id="about-me">
      <Title title="Sobre mi" subtitle="Conóceme" />

      {/* Pestañas estilo navegador antiguo */}
      <div role="tablist" aria-label="Secciones de Sobre mí" className="relative w-full overflow-x-auto">
        <div className="inline-flex min-w-full items-end gap-2 border-b border-white/15 pb-1">
          {tabs.map((t) => {
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${t.key}`}
                onClick={() => setActive(t.key)}
                className={[
                  "group flex items-center gap-2 px-3 py-1.5 rounded-t-md border",
                  "text-xs md:text-sm tracking-wide pixel-text",
                  isActive
                    ? "border-pink-400/60 bg-white/5 text-white shadow-[inset_0_-2px_0_0_rgba(255,255,255,0.08)]"
                    : "border-white/15 text-white/70 hover:text-white hover:bg-white/5",
                ].join(" ")}
              >
                <span className="opacity-80">{t.icon}</span>
                {t.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Panel retro */}
      <div className="rounded-md border border-white/12 bg-[#0b0614]/40 p-4 md:p-6 shadow-inner">
        {/* Presentation */}
        {active === "presentation" && (
          <section id="panel-presentation" role="tabpanel" aria-labelledby="tab-presentation" className="space-y-6">
            <div className="flex items-center justify-between text-[11px] text-white/50 mb-2">
              <span>/about/presentation</span>
              <span className="flex gap-1">◯ ◯ ◯</span>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-24 h-24 shrink-0 rounded-md border border-pink-400/50 overflow-hidden bg-black/30">
                <Image src="/rizzo.jpg" width={96} height={96} alt="Kimu" className="w-full h-full object-cover" />
              </div>

              <div className="flex-1 space-y-4">
                <h3 className="pixel-text text-xl text-white">rizzo</h3>
                <p className="text-white/80 leading-relaxed">
                  ¡Hola! Soy rizzo, una ingeniero de software al que le gusta la tecnologia. 
                  progamar, jugar y escuchar música.
                </p>
                <p className="text-white/80 leading-relaxed">
                  Este es mi pequeño rincón para expresarme, compartir recursos y quizá ayudarte a encontrar algo útil.
                </p>
              </div>
            </div>
          </section>
        )}


        {/* Skills con subtabs */}
        {active === "skills" && (
          <section id="panel-skills" role="tabpanel" aria-labelledby="tab-skills" className="space-y-6">
            <div className="text-[11px] text-white/50">/about/skills</div>

            <div role="tablist" aria-label="Subsecciones de Skills" className="flex flex-wrap gap-2">
              {skillSubTabs.map((s) => {
                const on = skillTab === s.key;
                return (
                  <button
                    key={s.key}
                    role="tab"
                    aria-selected={on}
                    onClick={() => setSkillTab(s.key)}
                    className={[
                      "inline-flex items-center gap-1 px-3 py-1.5 rounded-md border text-xs pixel-text",
                      on
                        ? "border-pink-400/60 bg-white/5 text-white"
                        : "border-white/15 text-white/70 hover:bg-white/5 hover:text-white",
                    ].join(" ")}
                  >
                    {s.icon}
                    {s.label}
                  </button>
                );
              })}
            </div>

            <div className="rounded-md border border-white/12 bg-black/30 p-4">
              {skillTab === "langs" && <IconShelf title="Languages" items={["Java","TypeScript", "Python", "C++(Basico)"]} />}
              {skillTab === "frameworks" && <IconShelf title="Frameworks" items={["React", "Next.js", "TailwindCSS"]} />}
              {skillTab === "dbs" && <IconShelf title="Databases" items={["PostgreSQL", "MongoDB", "SQLite"]} />}
              {skillTab === "tools" && <IconShelf title="Tools" items={["Git", "VS Code", "Docker",]} />}
            </div>

            <div className="flex justify-end gap-6 text-white/60 text-xs">
              <span className="inline-flex items-center gap-1"><Dot className="text-pink-400" /> L1</span>
              <span className="inline-flex items-center gap-1"><Dot className="text-purple-400" /> L2</span>
              <span className="inline-flex items-center gap-1"><Dot className="text-white" /> L3</span>
            </div>
          </section>
        )}

        {/* Tools */}
        {active === "tools" && (
          <section id="panel-tools" role="tabpanel" aria-labelledby="tab-tools" className="space-y-4">
            <div className="text-[11px] text-white/50">/about/tools</div>
            <div className="space-y-3">
              {[
                { name: "VS Code", note: "Editor principal" },
                { name: "Git", note: "Flujos con feature branches" },
                { name: "Docker", note: "Entornos reproducibles" },
              ].map((t) => (
                <div key={t.name} className="flex items-center justify-between rounded border border-white/12 bg-white/[0.03] px-3 py-2">
                  <div className="flex items-center gap-3">
                    <AppWindow size={14} className="text-pink-300" />
                    <span className="pixel-text text-white">{t.name}</span>
                  </div>
                  <span className="text-xs text-white/70">{t.note}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Apps */}
        {active === "apps" && (
          <section id="panel-apps" role="tabpanel" aria-labelledby="tab-apps" className="space-y-4">
            <div className="text-[11px] text-white/50">/about/apps</div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {[
                { name: "VSCode", icon: "/vscode.png" },
                { name: "Spotify", icon: "/spotify.png" },
                { name: "Obsidian", icon: "/obsidian.png" },
                { name: "Brave", icon: "/brave.png" },
              ].map((a) => (
                <div key={a.name} className="group rounded-md border border-white/12 bg-white/[0.03] p-3 hover:border-pink-400/50 transition-colors">
                  <div className="relative mx-auto mb-2 h-12 w-12 overflow-hidden rounded">
                    {a.icon ? (
                      <Image src={a.icon} alt={a.name} fill sizes="48px" className="object-contain" />
                    ) : (
                      <div className="h-full w-full grid place-items-center text-white/40 text-xs">N/A</div>
                    )}
                  </div>
                  <div className="text-center text-xs pixel-text text-white/90">{a.name}</div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

function IconShelf({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="pixel-text text-white mb-3">{title}</h4>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {items.map((it) => (
          <li key={it} className="flex items-center gap-2 rounded border border-white/10 bg-white/[0.02] px-3 py-2">
            <Dot className="text-pink-400" />
            <span className="text-white/80">{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AboutMe;

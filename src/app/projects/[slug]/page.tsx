import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ExternalLink, GitBranch } from 'lucide-react'
import { projects } from '@/data/projects'

type ProjectPageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }))
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((item) => item.slug === slug)

  if (!project) {
    notFound()
  }

  const meta = [
    project.role ? { label: 'Role', value: project.role } : null,
    project.timeline ? { label: 'Timeline', value: project.timeline } : null,
    project.team ? { label: 'Team', value: project.team } : null,
    project.status ? { label: 'Status', value: project.status } : null,
    project.systemType ? { label: 'System Type', value: project.systemType } : null,
  ].filter(Boolean) as Array<{ label: string; value: string }>

  const detailSections = [
    { title: 'Problem', content: project.problem },
    { title: 'Solution', content: project.solution },
    { title: 'Impact', content: project.impact },
  ]

  const listSections = [
    { title: 'Highlights', items: project.highlights },
    { title: 'Core Features', items: project.features },
    { title: 'Challenges', items: project.challenges },
    { title: 'System Architecture', items: project.architecture },
    { title: 'Future Scope', items: project.futureScope },
  ].filter((section) => section.items && section.items.length > 0) as Array<{ title: string; items: string[] }>

  const techItemCount = project.techStack
    ? project.techStack.reduce((total, group) => total + group.items.length, 0)
    : project.tags.length

  return (
    <main className="min-h-screen bg-[#0E0E12] text-[#F2EFE8] px-8 md:px-12 py-16 md:py-24">
      <div className="max-w-[1240px] mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono-dm text-[10px] tracking-[0.14em] uppercase text-[#9B97A0] hover:text-[#C9A96E] transition-colors"
        >
          <ArrowLeft size={12} /> Back to projects
        </Link>

        <header className="mt-10 border-t border-[#2A2A36] pt-10 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8">
            <p className="font-mono-dm text-[10px] text-[#C9A96E]/70 tracking-[0.25em] uppercase mb-4">Case Study</p>
            <h1 className="font-display italic text-[clamp(34px,5vw,64px)] leading-tight text-[#F2EFE8]">{project.title}</h1>
            <p className="font-mono-dm text-[17px] font-semibold tracking-[0.18em] uppercase text-[#6B6774] mt-3">{project.tagline}</p>
            <p className="text-[22px] text-[#C7C3CC] leading-relaxed mt-8 max-w-3xl">{project.overview ?? project.description}</p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-2.5 tracking-[0.14em] uppercase transition-all duration-300"
                  style={{ border: '1px solid #2A2A36', color: '#9B97A0' }}
                >
                  <GitBranch size={11} /> GitHub Repo
                </a>
              )}

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-mono-dm text-[10px] px-5 py-2.5 tracking-[0.14em] uppercase"
                  style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.35)', color: '#C9A96E' }}
                >
                  <ExternalLink size={11} /> Live Demo
                </a>
              )}
            </div>
          </div>

          <aside className="lg:col-span-4 rounded-2xl p-6 h-fit" style={{ background: '#16161C', border: '1px solid #2A2A36' }}>
            <p className="font-mono-dm text-[9px] text-[#C9A96E]/60 tracking-[0.25em] uppercase mb-4">Project Snapshot</p>
            <div className="space-y-3">
              {meta.map((item) => (
                <div key={item.label} className="flex items-start justify-between gap-4 border-b border-[#2A2A36] pb-3">
                  <span className="font-mono-dm text-[9px] text-[#4A4755] tracking-widest uppercase">{item.label}</span>
                  <span className="text-sm text-[#B8B4C0] text-right">{item.value}</span>
                </div>
              ))}
              <div className="flex items-start justify-between gap-4">
                <span className="font-mono-dm text-[9px] text-[#4A4755] tracking-widest uppercase">Tech Stack</span>
                <span className="text-sm text-[#B8B4C0] text-right">{techItemCount} items</span>
              </div>
            </div>
          </aside>
        </header>

        <section className="mt-12 border-t border-[#2A2A36] pt-8 grid md:grid-cols-3 gap-6">
          {detailSections.map((section) => (
            <article key={section.title} className="rounded-2xl p-6" style={{ background: '#16161C', border: '1px solid #2A2A36' }}>
              <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-3">{section.title}</p>
              <p className="text-[20px] text-[#C7C3CC] leading-relaxed">{section.content}</p>
            </article>
          ))}
        </section>

        {project.metrics && project.metrics.length > 0 && (
          <section className="mt-12 border-t border-[#2A2A36] pt-8">
            <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-4">Metrics</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <article key={`${metric.label}-${metric.value}`} className="rounded-xl p-5" style={{ background: '#16161C', border: '1px solid #2A2A36' }}>
                  <p className="font-mono-dm text-[9px] text-[#4A4755] tracking-wider uppercase mb-2">{metric.label}</p>
                  <p className="text-[22px] text-[#F2EFE8] leading-snug">{metric.value}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {listSections.length > 0 && (
          <section className="mt-12 border-t border-[#2A2A36] pt-8 grid lg:grid-cols-2 gap-6">
            {listSections.map((section) => (
              <article key={section.title} className="rounded-2xl p-6" style={{ background: '#16161C', border: '1px solid #2A2A36' }}>
                <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-4">{section.title}</p>
                <ul className="space-y-2.5">
                  {section.items.map((item) => (
                    <li key={item} className="text-[20px] text-[#C7C3CC] leading-relaxed flex gap-2.5">
                      <span className="text-[#C9A96E]/70">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
        </section>
        )}

        <section className="mt-12 border-t border-[#2A2A36] pt-8">
          <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-4">Tech Stack</p>
          {project.techStack && project.techStack.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-4">
              {project.techStack.map((group) => (
                <article key={group.category} className="rounded-xl p-5" style={{ background: '#16161C', border: '1px solid #2A2A36' }}>
                  <p className="font-mono-dm text-[9px] text-[#C9A96E]/60 tracking-[0.2em] uppercase mb-3">{group.category}</p>
                  <ul className="space-y-2">
                    {group.items.map((item) => (
                      <li key={item} className="text-[16px] text-[#C7C3CC] leading-relaxed flex gap-2.5">
                        <span className="text-[#C9A96E]/70">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono-dm text-[15px] uppercase tracking-wider text-[#C7C3CC] border border-[#2A2A36] bg-[#16161C]/70 px-3 py-2"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          {project.techStackNote && (
            <p className="text-[16px] text-[#B8B4C0] leading-relaxed mt-6 max-w-4xl">
              {project.techStackNote}
            </p>
          )}
        </section>
      </div>
    </main>
  )
}
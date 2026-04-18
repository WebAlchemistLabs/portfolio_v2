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

  return (
    <main className="min-h-screen bg-[#0E0E12] text-[#F2EFE8] px-8 md:px-12 py-16 md:py-24">
      <div className="max-w-[1080px] mx-auto">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono-dm text-[10px] tracking-[0.14em] uppercase text-[#9B97A0] hover:text-[#C9A96E] transition-colors"
        >
          <ArrowLeft size={12} /> Back to projects
        </Link>

        <header className="mt-10 border-t border-[#2A2A36] pt-10">
          <p className="font-mono-dm text-[10px] text-[#C9A96E]/70 tracking-[0.25em] uppercase mb-4">Case Study</p>
          <h1 className="font-display italic text-[clamp(34px,5vw,64px)] leading-tight text-[#F2EFE8]">{project.title}</h1>
          <p className="font-mono-dm text-[11px] tracking-[0.18em] uppercase text-[#4A4755] mt-3">{project.tagline}</p>
          <p className="text-base text-[#9B97A0] leading-relaxed mt-8 max-w-3xl">{project.description}</p>
        </header>

        <section className="mt-12 grid md:grid-cols-3 gap-6 border-t border-[#2A2A36] pt-8">
          <article>
            <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-2">Problem</p>
            <p className="text-sm text-[#9B97A0] leading-relaxed">{project.problem}</p>
          </article>
          <article>
            <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-2">Solution</p>
            <p className="text-sm text-[#9B97A0] leading-relaxed">{project.solution}</p>
          </article>
          <article>
            <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-2">Impact</p>
            <p className="text-sm text-[#9B97A0] leading-relaxed">{project.impact}</p>
          </article>
        </section>

        <section className="mt-12 border-t border-[#2A2A36] pt-8">
          <p className="font-mono-dm text-[9px] text-[#C9A96E]/55 tracking-[0.25em] uppercase mb-4">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono-dm text-[9px] uppercase tracking-wider text-[#9B97A0] border border-[#2A2A36] bg-[#16161C]/70 px-2.5 py-1.5"
              >
                {tag}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-12 flex flex-wrap items-center gap-4 border-t border-[#2A2A36] pt-8">
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
        </section>
      </div>
    </main>
  )
}
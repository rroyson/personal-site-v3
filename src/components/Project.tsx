import Image from 'next/image'
import type { Project as ProjectData } from '@/data/projects'

/** One project card: a real capture of the work over its text. The featured one spans the grid. */
export function Project({ project }: { project: ProjectData }) {
  const { featured } = project
  const links = [
    project.demoUrl && { href: project.demoUrl, label: 'Visit site ↗' },
    project.appStoreUrl && { href: project.appStoreUrl, label: 'App Store ↗' },
    project.githubUrl && { href: project.githubUrl, label: 'Source' },
  ].filter((l): l is { href: string; label: string } => Boolean(l))

  return (
    <article
      className={`flex shrink-0 basis-[86%] snap-center flex-col overflow-hidden rounded-3xl border bg-ground md:basis-auto ${
        featured ? 'border-accent/30 md:col-span-2 md:grid md:grid-cols-2' : 'border-line'
      }`}
    >
      <div className={`flex items-end bg-shot px-3 pt-3 ${featured ? 'md:px-8 md:pt-8' : 'md:px-6 md:pt-6'}`}>
        <Image
          src={project.image}
          alt={`Screenshot of ${project.title}`}
          width={1280}
          height={800}
          sizes={featured ? '(min-width: 48rem) 600px, 86vw' : '(min-width: 48rem) 580px, 86vw'}
          className='block aspect-[16/10] w-full rounded-t-[10px] object-cover object-top'
        />
      </div>
      <div className={`flex flex-1 flex-col gap-2.5 p-5 ${featured ? 'md:gap-4 md:p-11' : 'md:gap-3.5 md:p-8'}`}>
        <p className='flex flex-wrap gap-2'>
          {featured && <span className='tag border-accent bg-accent font-medium text-ground'>Featured</span>}
          {project.status === 'Live' ? (
            <span className='tag border-accent-line text-accent'>● Live</span>
          ) : (
            <span className='tag text-body'>Local</span>
          )}
          <span className='tag text-body'>{project.kind}</span>
        </p>
        <h3
          className={`font-display font-semibold text-ink ${
            featured
              ? 'text-[clamp(26px,3.4vw,40px)] leading-[1.05] tracking-[-0.03em]'
              : 'text-2xl leading-[1.12] tracking-[-0.025em]'
          }`}
        >
          {project.title}
        </h3>
        <p className='clamp-3 text-base text-soft'>{project.description}</p>
        <p className='font-mono text-xs text-mute'>{project.tech.join(' · ')}</p>
        <div className='mt-auto flex flex-wrap gap-x-6 gap-y-1 pt-2 text-[15px] font-semibold'>
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              target='_blank'
              rel='noopener noreferrer'
              className={`link inline-flex min-h-11 items-center ${
                i === 0 ? 'text-accent hover:text-accent-bright' : 'text-body hover:text-ink'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

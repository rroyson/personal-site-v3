import Image from 'next/image'
import type { Project as ProjectData } from '@/data/projects'
import { streams } from '@/data/skills'
import { ArrowIcon, GitHubIcon } from './icons'

/** Technology name -> its stream, so each tag carries that stream's hue. */
const STREAM_OF = new Map(streams.flatMap((s) => s.items.map((item) => [item, s.id] as const)))

/** One project row: a real capture of the work, a title that links to it, description, tech. */
export function Project({ project }: { project: ProjectData }) {
  const primary = project.demoUrl ?? project.githubUrl

  return (
    <article className='row'>
      <Image
        src={project.image}
        alt={`Screenshot of ${project.title}`}
        width={1280}
        height={800}
        sizes='(min-width: 48rem) 160px, 100vw'
        className='thumb'
      />
      <div>
        <h3 className='text-[17px] font-medium text-ink'>
          <a
            href={primary}
            target='_blank'
            rel='noopener noreferrer'
            className='title stretch inline-flex items-center gap-2'
          >
            {project.title}
            <span className='arrow text-mute'>
              <ArrowIcon />
            </span>
          </a>
        </h3>
        <p className='mt-2 max-w-[60ch] text-[15px] leading-relaxed'>{project.description}</p>
        <div className='relative z-10 mt-3.5 flex flex-wrap items-center gap-2'>
          {project.tech.map((tech) => (
            <span key={tech} className='pill' data-stream={STREAM_OF.get(tech)}>
              {tech}
            </span>
          ))}
          <span className='ml-auto flex items-center gap-3 text-xs font-medium text-mute'>
            <span>{project.status === 'Live' ? 'Live' : 'Local only'}</span>
            {project.demoUrl && (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='link inline-flex items-center gap-1.5 hover:text-ink'
              >
                <GitHubIcon />
                Source
              </a>
            )}
          </span>
        </div>
      </div>
    </article>
  )
}

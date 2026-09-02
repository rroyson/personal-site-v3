import Image from 'next/image'
import { Constellation } from '@/components/Constellation'
import { SectionNav } from '@/components/SectionNav'
import { Project } from '@/components/Project'
import { ContactForm } from '@/components/ContactForm'
import { GitHubIcon, LinkedInIcon } from '@/components/icons'
import { projects } from '@/data/projects'
import { streams, type StreamId } from '@/data/skills'

/** Each stream owns a hue; amber (web) is also the page's action color. */
const STREAM_TEXT: Record<StreamId, string> = {
  backend: 'text-backend',
  web: 'text-amber',
  ai: 'text-ai',
}

const SOCIALS = [
  { href: 'https://github.com/rroyson', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/rroyson/', label: 'LinkedIn', Icon: LinkedInIcon },
]

/** A sticky label on phones; invisible on desktop, where the aside nav already names the section. */
function SectionHead({ children }: { children: string }) {
  return (
    <h2 className='label sticky top-0 z-20 -mx-6 mb-5 bg-ground/85 px-6 py-4 text-ink backdrop-blur md:sr-only'>
      {children}
    </h2>
  )
}

export default function Home() {
  return (
    <>
      <Constellation />
      <div className='relative z-10 mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-12 md:gap-16 md:px-10'>
        <aside className='pt-14 pb-6 md:sticky md:top-0 md:col-span-5 md:flex md:h-dvh md:min-h-[640px] md:flex-col md:justify-between md:pt-22 md:pb-18'>
          <div className='enter'>
            <Image
              src='/profile.jpeg'
              alt='Rob Royson'
              width={72}
              height={72}
              priority
              className='mb-6 rounded-lg border border-line'
            />
            <h1 className='text-[2.5rem] leading-none font-bold tracking-tight text-ink md:text-[2.875rem]'>
              Rob Royson
            </h1>
            <p className='mt-3.5 text-xl font-medium text-ink'>Software Developer</p>
            <p className='mt-4 max-w-[34ch] leading-relaxed'>
              Ten years shipping software, from startups to enterprise.{' '}
              <span className='text-backend'>Backend that deploys</span>,{' '}
              <span className='text-amber'>web that ships</span>,{' '}
              <span className='text-ai'>AI built in</span>.
            </p>
            <SectionNav />
          </div>
          <ul className='enter-last mt-8 flex gap-5 text-sm font-medium md:mt-0'>
            {SOCIALS.map(({ href, label, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link inline-flex items-center gap-2 text-mute hover:text-ink'
                >
                  <Icon />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        <main id='main' className='pt-6 pb-16 md:col-span-7 md:pt-22 md:pb-20'>
          <section id='about' className='mb-24 scroll-mt-20'>
            <SectionHead>About</SectionHead>
            <div className='space-y-4 leading-relaxed'>
              <p>
                I&rsquo;m a software developer with{' '}
                <b className='font-medium text-ink'>ten years</b> of delivering
                scalable systems in fast-paced environments, from startups to
                enterprise corporations.
              </p>
              <p>
                I&rsquo;ve built <b className='font-medium text-ink'>Java and Node services</b>{' '}
                and the <b className='font-medium text-ink'>CI pipelines</b> that deploy
                them to Kubernetes on AWS, shipped complete web products in{' '}
                <b className='font-medium text-ink'>React, Next.js, and TypeScript</b>,
                and built AI in from the start with{' '}
                <b className='font-medium text-ink'>OpenAI, Claude, and MCP servers</b>.
                Open to full-time engineering roles; the right contract build is
                welcome too.
              </p>
            </div>
          </section>

          <section id='streams' className='mb-24 scroll-mt-20'>
            <SectionHead>Streams</SectionHead>
            <div className='space-y-10'>
              {streams.map((stream) => (
                <div key={stream.id} className='grid gap-2 md:grid-cols-[120px_1fr] md:gap-5'>
                  <p className={`label pt-1 ${STREAM_TEXT[stream.id]}`}>{stream.label}</p>
                  <div>
                    <h3 className='text-[17px] font-medium text-ink'>{stream.title}</h3>
                    <p className='mt-2 text-[15px] leading-relaxed'>{stream.blurb}</p>
                    <p className='mt-3 text-sm leading-relaxed text-mute'>
                      {stream.items.join(', ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id='projects' className='mb-24 scroll-mt-20'>
            <SectionHead>Projects</SectionHead>
            <div className='space-y-2'>
              {projects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </section>

          <section id='contact' className='scroll-mt-20'>
            <SectionHead>Contact</SectionHead>
            <p className='mb-8 max-w-[60ch] leading-relaxed'>
              Hiring for an engineering role, or have a build in mind? Send a
              note and it lands in my inbox.
            </p>
            <ContactForm />
            <p className='mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm'>
              <span className='text-mute'>Or find me on</span>
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='link inline-flex items-center gap-2 font-medium text-ink hover:text-amber'
                >
                  <Icon />
                  {label}
                </a>
              ))}
            </p>
          </section>

          <footer className='mt-24 text-xs text-mute'>
            &copy; {new Date().getFullYear()} Rob Royson. Built with Next.js.
          </footer>
        </main>
      </div>
    </>
  )
}

import { Project } from '@/components/Project'
import { Skills } from '@/components/Skills'
import { ContactForm } from '@/components/ContactForm'
import { ArrowDownIcon, ArrowIcon, ArrowRightIcon, GitHubIcon, LinkedInIcon } from '@/components/icons'
import { projects } from '@/data/projects'

const NAV = [
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#about', label: 'About' },
]

const SOCIALS = [
  { href: 'https://github.com/rroyson', label: 'GitHub', Icon: GitHubIcon },
  { href: 'https://www.linkedin.com/in/rroyson/', label: 'LinkedIn', Icon: LinkedInIcon },
]

/** Shared page column: 20px gutters on phones, 32px from md up. */
const WRAP = 'mx-auto max-w-[1240px] px-5 md:px-8'

export default function Home() {
  return (
    <>
      <header className='sticky top-0 z-20 border-b border-line bg-ground/85 pt-[env(safe-area-inset-top)] backdrop-blur-md'>
        <nav aria-label='Primary' className={`${WRAP} flex items-center justify-between gap-6 py-2.5`}>
          <a href='#top' className='flex min-h-11 items-center gap-3 text-ink'>
            <span
              aria-hidden='true'
              className='flex h-8 w-8 items-center justify-center rounded-lg bg-accent font-display text-[13px] font-bold text-ground'
            >
              RR
            </span>
            <span className='font-display text-[17px] font-semibold tracking-[-0.01em]'>Rob Royson</span>
          </a>
          <div className='flex items-center gap-7 text-[15px] font-medium'>
            <ul className='hidden gap-7 md:flex'>
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className='link py-2.5 text-body hover:text-ink'>
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
            <a href='#contact' className='btn btn-primary min-h-11 px-[18px] text-[15px]'>
              Contact
            </a>
          </div>
        </nav>
      </header>

      <main id='main'>
        <section id='top' className={`${WRAP} pt-12 pb-14 md:pt-30 md:pb-32`}>
          <p className='mb-6 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm font-medium text-ink'>
            <span aria-hidden='true' className='h-2 w-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(74,168,255,0.18)]' />
            <span>Open to full-time roles</span>
            <span className='text-mute'>· Charleston, SC</span>
          </p>
          <h1 className='max-w-[14ch] font-display text-[clamp(42px,8vw,112px)] leading-[0.98] font-semibold tracking-[-0.045em] text-balance text-ink'>
            Software developer building for the <span className='text-accent'>web</span> and{' '}
            <span className='text-accent'>AI</span>.
          </h1>
          <p className='mt-7 max-w-[46ch] text-[clamp(17px,1.6vw,21px)] leading-[1.55] text-soft'>
            Ten years across startups and enterprise, working on backend services, CI/CD, web and mobile
            apps, and agentic AI systems.
          </p>
          <div className='mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap'>
            <a href='#work' className='btn btn-primary'>
              View work
              <ArrowDownIcon />
            </a>
            <a href='#contact' className='btn btn-ghost'>
              Get in touch
            </a>
          </div>
        </section>

        <section id='work' className='border-y border-line bg-surface'>
          <div className={`${WRAP} py-14 md:py-28`}>
            <div className='mb-8 flex flex-wrap items-end justify-between gap-x-6 gap-y-3'>
              <div>
                <p className='eyebrow mb-3'>01 — WORK</p>
                <h2 className='heading'>Selected projects</h2>
              </div>
              <a
                href='https://github.com/rroyson'
                target='_blank'
                rel='noopener noreferrer'
                className='link inline-flex min-h-11 items-center gap-2 font-medium text-accent hover:text-accent-bright'
              >
                All repos on GitHub
                <ArrowIcon />
              </a>
            </div>
            <p aria-hidden='true' className='mb-3.5 flex items-center gap-2 text-[13px] text-mute md:hidden'>
              {projects.length} projects · swipe
              <ArrowRightIcon />
            </p>
            <div className='rail -mx-5 flex snap-x snap-mandatory gap-3 overflow-x-auto px-5 pb-1 md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0'>
              {projects.map((project) => (
                <Project key={project.title} project={project} />
              ))}
            </div>
          </div>
        </section>

        <section id='skills' className={`${WRAP} py-14 md:pt-28 md:pb-24`}>
          <p className='eyebrow mb-3'>02 — SKILLS</p>
          <h2 className='heading mb-9'>What I work on</h2>
          <Skills />
        </section>

        <section id='about' className={`${WRAP} py-14 md:pt-16 md:pb-24`}>
          <div className='grid items-start gap-x-16 gap-y-5 md:grid-cols-2'>
            <div>
              <p className='eyebrow mb-3'>03 — ABOUT</p>
              <h2 className='heading'>About me</h2>
            </div>
            <div className='space-y-4 text-[clamp(17px,1.5vw,19px)] leading-[1.65] text-soft'>
              <p>
                I&rsquo;m a software developer in Charleston, SC, with ten years at startups and large
                companies, working across backend services, delivery pipelines, web and mobile apps, and AI
                systems.
              </p>
              <p>
                Lately that means agentic pipelines, agent harnesses and MCP servers on hosted and local
                models. I&rsquo;m looking for a full-time engineering role, and open to the right contract
                project.
              </p>
            </div>
          </div>
        </section>

        <section id='contact' className={`${WRAP} pb-14 md:pb-24`}>
          <div className='grid items-start gap-x-16 gap-y-8 border-t border-line pt-14 md:grid-cols-2 md:pt-16'>
            <div className='space-y-4'>
              <p className='eyebrow'>04 — CONTACT</p>
              <h2 className='heading'>Get in touch</h2>
              <p className='max-w-[36ch] text-soft'>A role, a project, or a question.</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer
        className={`${WRAP} flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-t border-line pt-4 pb-[calc(28px+env(safe-area-inset-bottom))] text-sm text-mute`}
      >
        <span>&copy; {new Date().getFullYear()} Rob Royson</span>
        <ul aria-label='Social' className='flex gap-1'>
          {SOCIALS.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='link inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-[10px] px-2.5 font-medium text-body hover:text-ink'
              >
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}

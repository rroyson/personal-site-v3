import { Button } from '@/components/ui/button'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 xl:py-48'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl'>
                  Hey, I&apos;m Rob Royson
                </h1>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Software Developer passionate about building exceptional
                  digital experiences
                </p>
              </div>
              <div className='space-x-4'>
                <Button asChild>
                  <Link href='/projects'>View My Work</Link>
                </Button>
                <Button variant='outline' asChild>
                  <Link href='/contact'>Contact Me</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Interactive Game Section */}
        <section className='w-full py-12 md:py-16'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center mb-6'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Interactive Fun
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Take a break and test your memory with this matching game
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/50'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  My Skills
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  I specialize in these technologies and tools
                </p>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8'>
                {[
                  'JavaScript',
                  'TypeScript',
                  'React',
                  'Next.js',
                  'Node.js',
                  'Tailwind CSS',
                  'Git',
                  'AWS',
                ].map((skill) => (
                  <div key={skill} className='flex flex-col items-center gap-2'>
                    <div className='bg-primary/10 p-4 rounded-full'>
                      <div className='w-12 h-12 flex items-center justify-center'>
                        <span className='text-2xl font-semibold'>
                          {skill.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <span className='font-medium'>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className='w-full py-12 md:py-24 lg:py-32'>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
                  Featured Projects
                </h2>
                <p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>
                  Check out some of my recent work
                </p>
              </div>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
                {[1, 2, 3].map((id) => (
                  <div
                    key={id}
                    className='border rounded-lg overflow-hidden group'
                  >
                    <div className='bg-muted aspect-video relative'>
                      <div className='absolute inset-0 flex items-center justify-center text-muted-foreground text-xl font-bold'>
                        Project {id}
                      </div>
                    </div>
                    <div className='p-4'>
                      <h3 className='font-semibold text-lg mb-1'>
                        Project Title {id}
                      </h3>
                      <p className='text-sm text-muted-foreground mb-4'>
                        A brief description of this project and the technologies
                        used.
                      </p>
                      <Button variant='outline' size='sm' asChild>
                        <Link href={`/projects/${id}`}>View Project</Link>
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant='outline' className='mt-8' asChild>
                <Link href='/projects'>View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

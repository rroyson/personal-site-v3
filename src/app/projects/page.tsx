import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Projects | Rob Royson',
  description:
    'Explore the portfolio of projects built by Rob Royson, showcasing skills in web development.',
}

// Mock project data
const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description:
      'A modern e-commerce platform built with Next.js, featuring product listings, cart functionality, and secure checkout.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Stripe API',
    ],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/ecommerce',
  },
  {
    id: 2,
    title: 'Task Management App',
    description:
      'A responsive task management application with drag-and-drop functionality, user authentication, and real-time updates.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/task-manager',
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description:
      'A weather application that provides real-time weather data and forecasts using a third-party API.',
    technologies: ['JavaScript', 'HTML', 'CSS', 'OpenWeather API'],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/weather-app',
  },
  {
    id: 4,
    title: 'Personal Blog',
    description:
      'A blog platform built with Next.js, featuring a custom CMS, responsive design, and SEO optimization.',
    technologies: ['Next.js', 'React', 'MongoDB', 'Markdown'],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/blog',
  },
  {
    id: 5,
    title: 'Recipe Finder',
    description:
      'A web application that allows users to search for recipes based on ingredients they have on hand.',
    technologies: ['React', 'CSS', 'Food API'],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/recipe-finder',
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description:
      'This portfolio website showcasing my projects and skills as a developer.',
    technologies: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'TypeScript'],
    image: '/placeholder.jpg',
    demoUrl: 'https://example.com',
    repoUrl: 'https://github.com/yourusername/portfolio',
  },
]

export default function ProjectsPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 container py-12'>
        <div className='space-y-8'>
          <div className='text-center max-w-2xl mx-auto'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
              My Projects
            </h1>
            <p className='text-muted-foreground'>
              Here are some of the projects I&apos;ve worked on. Each project
              showcases different skills and technologies.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='border rounded-lg overflow-hidden group flex flex-col h-full'
              >
                <div className='bg-muted aspect-video relative'>
                  <div className='absolute inset-0 flex items-center justify-center text-muted-foreground text-xl font-bold'>
                    {project.title}
                  </div>
                </div>
                <div className='p-4 flex-grow flex flex-col'>
                  <h3 className='font-semibold text-lg mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-sm text-muted-foreground mb-4 flex-grow'>
                    {project.description}
                  </p>
                  <div className='flex flex-wrap gap-2 mb-4'>
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className='bg-secondary text-secondary-foreground px-2 py-0.5 rounded-full text-xs font-medium'
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className='text-xs font-medium text-muted-foreground'>
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                  <div className='flex gap-2'>
                    <Button variant='outline' size='sm' asChild>
                      <Link
                        href={project.demoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        Live Demo
                      </Link>
                    </Button>
                    <Button variant='outline' size='sm' asChild>
                      <Link
                        href={project.repoUrl}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        GitHub
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

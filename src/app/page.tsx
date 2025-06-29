import { SkillCarousel } from '@/components/SkillCarousel'
import { ProjectCard } from '@/components/ProjectCard'
import { ContactForm } from '@/components/ContactForm'
import { projects } from '@/data/projects'
import { skills } from '@/data/skills'

export default function Home() {
  return (
    <div className='min-h-screen bg-gray-50 dark:bg-gray-900'>
      {/* Header */}
      <header className='bg-white dark:bg-gray-800 shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center py-6'>
            <div className='flex items-center'>
              <div className='text-2xl font-bold text-gray-900 dark:text-white'>
                Rob Royson
              </div>
              <div className='ml-4 text-gray-600 dark:text-gray-400'>
                Software Developer
              </div>
            </div>
            <nav className='flex space-x-6'>
              <a
                href='#about'
                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                About
              </a>
              <a
                href='#projects'
                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                Projects
              </a>
              <a
                href='#contact'
                className='text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors'
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center'>
            <h1 className='text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6'>
              Building the Future,
              <br />
              <span className='text-blue-600 dark:text-blue-400'>
                One App at a Time
              </span>
            </h1>
            <p className='text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto'>
              I&apos;m a passionate software developer with expertise in modern
              web technologies. I create scalable, user-friendly applications
              that solve real-world problems.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center items-center mb-12'>
              <a
                href='#projects'
                className='bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-200'
              >
                View My Work
              </a>
              <a
                href='#contact'
                className='border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-8 py-3 rounded-lg font-medium transition-colors duration-200'
              >
                Get In Touch
              </a>
            </div>
            <div className='flex justify-center'>
              <SkillCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id='about'
        className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              About Me
            </h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            {/* Left Column: About Text */}
            <div>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                With several years of experience in software development, I
                specialize in creating robust, scalable applications using
                modern technologies. My passion lies in solving complex problems
                and turning ideas into reality through code.
              </p>
              <p className='text-gray-600 dark:text-gray-300 mb-6'>
                I have a strong background in both frontend and backend
                development, with expertise in React, Node.js, TypeScript, and
                cloud technologies. I&apos;m always eager to learn new
                technologies and take on challenging projects.
              </p>
              <div className='grid grid-cols-2 gap-4'>
                <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
                  <div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1'>
                    5+
                  </div>
                  <div className='text-gray-600 dark:text-gray-300'>
                    Years Experience
                  </div>
                </div>
                <div className='bg-gray-50 dark:bg-gray-700 p-4 rounded-lg'>
                  <div className='text-2xl font-bold text-blue-600 dark:text-blue-400 mb-1'>
                    20+
                  </div>
                  <div className='text-gray-600 dark:text-gray-300'>
                    Projects Completed
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Technical Skills */}
            <div className='bg-gray-100 dark:bg-gray-700 p-8 rounded-lg h-fit'>
              <h3 className='text-xl font-semibold text-gray-900 dark:text-white mb-6'>
                Technical Skills
              </h3>
              <div className='grid grid-cols-3 gap-3'>
                {skills.map((skill) => (
                  <div
                    key={skill}
                    className='flex items-center p-2 bg-white dark:bg-gray-600 rounded-lg shadow-sm'
                  >
                    <div className='flex-1 text-gray-700 dark:text-gray-300 text-xs text-center'>
                      {skill}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id='projects' className='py-20 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              Featured Projects
            </h2>
            <p className='text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
              Here are some of the projects I&apos;ve worked on recently. Each
              represents a unique challenge and showcases different aspects of
              my development skills.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id='contact'
        className='py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800'
      >
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl font-bold text-gray-900 dark:text-white mb-4'>
              Let&apos;s Work Together
            </h2>
            <p className='text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto'>
              I&apos;m always interested in hearing about new opportunities and
              exciting projects. Whether you have a project in mind or just want
              to chat about technology, feel free to reach out.
            </p>
          </div>
          
          <ContactForm />
          
          <div className='text-center mt-12'>
            <p className='text-gray-600 dark:text-gray-400 mb-6'>
              Or connect with me on social media
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <a
                href='https://www.linkedin.com/in/rroyson/'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200'
              >
                LinkedIn
              </a>
              <a
                href='https://github.com/rroyson'
                target='_blank'
                rel='noopener noreferrer'
                className='border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-2 rounded-lg font-medium transition-colors duration-200'
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-100 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto text-center'>
          <p className='text-gray-600 dark:text-gray-400'>
            © 2024 Rob Royson. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  )
}

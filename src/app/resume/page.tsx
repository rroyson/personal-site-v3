'use client'

import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function ResumePage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 container py-12'>
        <div className='max-w-3xl mx-auto'>
          <div className='flex justify-between items-center mb-8'>
            <h1 className='text-3xl font-bold tracking-tighter'>Resume</h1>
            <Button
              variant='outline'
              onClick={() => window.print()}
              className='print:hidden'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mr-2'
              >
                <polyline points='6 9 6 2 18 2 18 9'></polyline>
                <path d='M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2'></path>
                <rect x='6' y='14' width='12' height='8'></rect>
              </svg>
              Print Resume
            </Button>
          </div>

          <div className='border rounded-lg p-8 shadow-sm'>
            {/* Header */}
            <div className='mb-8 text-center'>
              <h2 className='text-2xl font-bold mb-2'>Rob Royson</h2>
              <p className='text-muted-foreground mb-2'>Software Developer</p>
              <div className='flex justify-center gap-x-4 text-sm'>
                <span>email@example.com</span>
                <span>•</span>
                <span>(123) 456-7890</span>
                <span>•</span>
                <span>City, Country</span>
              </div>
            </div>

            <Separator className='my-6' />

            {/* Summary */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-3'>
                Professional Summary
              </h3>
              <p className='text-sm text-muted-foreground'>
                Experienced software developer with expertise in frontend and
                backend technologies. Passionate about creating user-friendly,
                scalable web applications with clean, efficient code. Strong
                problem-solving skills and ability to work effectively in team
                environments.
              </p>
            </div>

            {/* Experience */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-4'>Work Experience</h3>
              <div className='space-y-6'>
                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Senior Frontend Developer</h4>
                    <span className='text-sm text-muted-foreground'>
                      2021 - Present
                    </span>
                  </div>
                  <p className='text-sm mb-1'>Tech Company Inc.</p>
                  <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
                    <li>
                      Led the development of modern web applications using
                      React, Next.js, and TypeScript
                    </li>
                    <li>
                      Improved site performance by 40% through code optimization
                      and modern web techniques
                    </li>
                    <li>
                      Mentored junior developers and conducted technical
                      interviews
                    </li>
                    <li>
                      Collaborated with design and backend teams to implement
                      new features
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Full Stack Developer</h4>
                    <span className='text-sm text-muted-foreground'>
                      2018 - 2021
                    </span>
                  </div>
                  <p className='text-sm mb-1'>Digital Solutions Ltd.</p>
                  <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
                    <li>
                      Built responsive web applications with React frontend and
                      Node.js backend
                    </li>
                    <li>
                      Implemented CI/CD pipelines and improved development
                      workflows
                    </li>
                    <li>Contributed to database design and optimization</li>
                    <li>
                      Worked closely with clients to gather requirements and
                      deliver solutions
                    </li>
                  </ul>
                </div>

                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>Junior Web Developer</h4>
                    <span className='text-sm text-muted-foreground'>
                      2016 - 2018
                    </span>
                  </div>
                  <p className='text-sm mb-1'>Web Studio Agency</p>
                  <ul className='list-disc list-inside text-sm text-muted-foreground space-y-1'>
                    <li>
                      Developed and maintained client websites using HTML, CSS,
                      JavaScript
                    </li>
                    <li>
                      Worked with various CMS platforms including WordPress and
                      Drupal
                    </li>
                    <li>
                      Assisted senior developers with project tasks and bug
                      fixes
                    </li>
                    <li>
                      Participated in team code reviews and training sessions
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className='mb-8'>
              <h3 className='text-lg font-semibold mb-4'>Education</h3>
              <div className='space-y-4'>
                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>
                      Bachelor of Science in Computer Science
                    </h4>
                    <span className='text-sm text-muted-foreground'>
                      2012 - 2016
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    University Name
                  </p>
                </div>
                <div>
                  <div className='flex justify-between mb-1'>
                    <h4 className='font-medium'>
                      Web Development Certification
                    </h4>
                    <span className='text-sm text-muted-foreground'>2018</span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Online Learning Platform
                  </p>
                </div>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>Skills</h3>
              <div className='grid grid-cols-2 gap-4 text-sm'>
                <div>
                  <h4 className='font-medium mb-2'>Frontend</h4>
                  <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                    <li>JavaScript / TypeScript</li>
                    <li>React / Next.js</li>
                    <li>HTML5 / CSS3</li>
                    <li>Tailwind CSS / SASS</li>
                    <li>Redux / Context API</li>
                  </ul>
                </div>
                <div>
                  <h4 className='font-medium mb-2'>Backend & Tools</h4>
                  <ul className='list-disc list-inside text-muted-foreground space-y-1'>
                    <li>Node.js / Express</li>
                    <li>MongoDB / PostgreSQL</li>
                    <li>REST API / GraphQL</li>
                    <li>Git / GitHub</li>
                    <li>Docker / AWS</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          @page {
            margin: 1cm;
          }
          body {
            font-size: 12pt;
          }
          header,
          footer,
          .print\\:hidden {
            display: none !important;
          }
          .border {
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}

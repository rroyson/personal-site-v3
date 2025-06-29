import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const metadata = {
  title: 'About | Rob Royson',
  description:
    'Learn more about Rob Royson, a software developer with expertise in web development.',
}

export default function AboutPage() {
  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 container py-12'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          <div className='lg:col-span-2 space-y-8'>
            <div>
              <h1 className='text-3xl font-bold tracking-tighter mb-6'>
                About Me
              </h1>
              <div className='prose max-w-none dark:prose-invert'>
                <p>
                  Hi, I&apos;m Rob Royson, a passionate software developer with
                  expertise in building modern web applications. I specialize in
                  creating high-quality, user-friendly experiences using
                  cutting-edge technologies.
                </p>
                <p>
                  With several years of experience in the industry, I&apos;ve
                  worked on a wide range of projects, from small business
                  websites to complex enterprise applications. My approach
                  combines technical skills with a deep understanding of user
                  needs to deliver products that are both functional and
                  enjoyable to use.
                </p>
                <p>
                  When I&apos;m not coding, you can find me exploring new
                  technologies, contributing to open-source projects, and
                  sharing knowledge with the developer community.
                </p>
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-bold tracking-tighter mb-6'>
                Work Experience
              </h2>
              <div className='space-y-6'>
                {[
                  {
                    title: 'Senior Frontend Developer',
                    company: 'Tech Company Inc.',
                    period: '2021 - Present',
                    description:
                      'Led development of multiple web applications using React, Next.js, and TypeScript. Improved site performance by 40% through code optimization and modern web techniques.',
                  },
                  {
                    title: 'Full Stack Developer',
                    company: 'Digital Solutions Ltd.',
                    period: '2018 - 2021',
                    description:
                      'Built responsive web applications with React frontend and Node.js backend. Implemented CI/CD pipelines and improved development workflows.',
                  },
                  {
                    title: 'Junior Web Developer',
                    company: 'Web Studio Agency',
                    period: '2016 - 2018',
                    description:
                      'Developed and maintained client websites using HTML, CSS, JavaScript, and various CMS platforms.',
                  },
                ].map((job, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>{job.title}</CardTitle>
                      <CardDescription>
                        {job.company} | {job.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p>{job.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <Card>
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-medium mb-2'>Frontend</h3>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'JavaScript',
                        'TypeScript',
                        'React',
                        'Next.js',
                        'HTML5',
                        'CSS3',
                        'Tailwind CSS',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className='bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-medium'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className='font-medium mb-2'>Backend</h3>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Node.js',
                        'Express',
                        'MongoDB',
                        'PostgreSQL',
                        'REST API',
                        'GraphQL',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className='bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-medium'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <h3 className='font-medium mb-2'>Tools & Others</h3>
                    <div className='flex flex-wrap gap-2'>
                      {[
                        'Git',
                        'GitHub',
                        'VS Code',
                        'Docker',
                        'AWS',
                        'CI/CD',
                        'Agile',
                        'Scrum',
                      ].map((skill) => (
                        <span
                          key={skill}
                          className='bg-secondary text-secondary-foreground px-2.5 py-0.5 rounded-full text-xs font-medium'
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <h3 className='font-medium'>Computer Science, BSc</h3>
                    <p className='text-sm text-muted-foreground'>
                      University Name, 2012-2016
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h3 className='font-medium'>
                      Web Development Certification
                    </h3>
                    <p className='text-sm text-muted-foreground'>
                      Online Learning Platform, 2018
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

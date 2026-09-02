export type StreamId = 'backend' | 'web' | 'ai'

export interface Stream {
  id: StreamId
  label: string
  title: string
  blurb: string
  items: string[]
}

export const streams: Stream[] = [
  {
    id: 'backend',
    label: 'Backend',
    title: 'Commit to production',
    blurb: 'Java and Node services, and the CI/CD that takes every merge to production.',
    items: [
      'Java',
      'Node.js',
      'Express',
      'Docker',
      'Kubernetes',
      'AWS',
      'GitHub Actions',
      'Jenkins',
      'Kafka',
      'PostgreSQL',
      'MongoDB',
      'Maven',
      'Git',
    ],
  },
  {
    id: 'web',
    label: 'Web',
    title: 'Products that ship',
    blurb: 'Complete, fast web products, end to end.',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    id: 'ai',
    label: 'AI',
    title: 'Built in, not bolted on',
    blurb: 'LLM features designed into the product from the first commit.',
    items: ['OpenAI', 'Claude', 'MCP Server', 'Cursor'],
  },
]

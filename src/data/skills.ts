export interface SkillGroup {
  id: string
  title: string
  blurb: string
  /** Shown first, outlined in the accent. */
  core?: string[]
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    id: 'ai',
    title: 'AI',
    blurb: 'Agentic pipelines, agent harnesses and the tools agents call, across hosted and local models.',
    core: ['Agentic pipelines', 'Agent harnesses', 'MCP servers', 'Tool calling'],
    items: ['OpenAI', 'Anthropic', 'Gemini', 'Local LLMs', 'Ollama', 'Hugging Face'],
  },
  {
    id: 'web',
    title: 'Web & Mobile',
    blurb: 'Web apps and native iOS apps, front to back.',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Swift', 'SwiftUI', 'iOS'],
  },
  {
    id: 'backend',
    title: 'Backend',
    blurb: 'Services, APIs and data.',
    items: ['Java', 'Node.js', 'Express', 'Kafka', 'PostgreSQL', 'MongoDB'],
  },
  {
    id: 'cicd',
    title: 'CI/CD & Infra',
    blurb: 'Pipelines and containers, with continuous deployment.',
    items: [
      'Continuous deployment',
      'Jenkins',
      'GitHub Actions',
      'Kubernetes',
      'Docker',
      'AWS',
      'Maven',
    ],
  },
]

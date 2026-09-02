export interface Project {
  title: string
  description: string
  tech: string[]
  status: 'Live' | 'Local'
  /** Public source, when there is one. Closed-source products omit it. */
  githubUrl?: string
  demoUrl?: string
  appStoreUrl?: string
  /** A real capture of the project, 1280x800, in public/projects. */
  image: string
}

export const projects: Project[] = [
  {
    title: 'Naba',
    description:
      'Gig and band management for working musicians. Google Calendar sync, crew availability, setlists, run of show, and a venue CRM, on the web and on iOS.',
    tech: ['Next.js', 'TypeScript', 'Express', 'PostgreSQL', 'SwiftUI'],
    status: 'Live',
    demoUrl: 'https://nabaflow.io',
    appStoreUrl: 'https://apps.apple.com/us/app/nabaflow/id6761624940',
    image: '/projects/naba.jpg',
  },
  {
    title: 'AI Spotify Playlist Generator',
    description:
      'Builds a personalized Spotify playlist from a few words about your taste. OpenAI reads the prompt, the Spotify API assembles the tracks.',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'OpenAI', 'Spotify API'],
    status: 'Live',
    githubUrl: 'https://github.com/rroyson/spotify-playlist-generator',
    demoUrl:
      'https://spotify-playlist-generator-rob-roysons-projects.vercel.app',
    image: '/projects/spotify-playlist-generator.jpg',
  },
  {
    title: 'The Charleston Wedding Band',
    description:
      'Marketing site for a working wedding band. Booking inquiries arrive by email through Resend, and the whole thing stays fast on a phone.',
    tech: ['Next.js', 'Resend', 'TypeScript'],
    status: 'Live',
    githubUrl: 'https://github.com/rroyson/DTSMB-WEBSITE-V2',
    demoUrl: 'https://thecharlestonweddingband.com',
    image: '/projects/charleston-wedding-band.jpg',
  },
]

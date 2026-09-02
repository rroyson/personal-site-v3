export interface Project {
  title: string
  description: string
  tech: string[]
  status: 'Live' | 'Local'
  githubUrl: string
  demoUrl?: string
  /** A real capture of the project, 1280x800, in public/projects. */
  image: string
}

export const projects: Project[] = [
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
  {
    title: 'Key Drums',
    description:
      'Play a drum kit with your keyboard. Plain HTML and CSS, no build step, no framework.',
    tech: ['HTML', 'CSS'],
    status: 'Local',
    githubUrl: 'https://github.com/rroyson/key-drums',
    image: '/projects/key-drums.jpg',
  },
]

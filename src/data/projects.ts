export interface Project {
  title: string
  description: string
  tech: string[]
  status: 'Live' | 'Local'
  githubUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: 'AI Spotify Playlist Generator',
    description:
      'AI-powered web app that creates personalized Spotify playlists using OpenAI to analyze music preferences and generate curated recommendations',
    tech: ['Next.js', 'Node.js', 'TypeScript', 'OpenAI', 'Spotify API'],
    status: 'Live',
    githubUrl: 'https://github.com/rroyson/spotify-playlist-generator',
    demoUrl:
      'https://spotify-playlist-generator-er93tyr99-rob-roysons-projects.vercel.app',
  },
  {
    title: 'The Charleston Wedding Band',
    description:
      'Professional business website with modern design, contact forms, and email integration for a consulting company',
    tech: ['Next.js', 'Resend', 'TypeScript'],
    status: 'Live',
    githubUrl: 'https://github.com/rroyson/DTSMB-WEBSITE-V2',
    demoUrl: 'https://thecharlestonweddingband.com',
  },
  {
    title: 'Key Drums',
    description: 'Play drums with your keyboard written in html and css',
    tech: ['HTML', 'CSS'],
    status: 'Local',
    githubUrl: 'https://github.com/rroyson/key-drums',
  },
]

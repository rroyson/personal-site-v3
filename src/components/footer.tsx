import Link from 'next/link'

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
  { name: 'Twitter', url: 'https://twitter.com/yourusername' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className='w-full border-t py-6 md:py-8 bg-background/95'>
      <div className='container flex flex-col items-center gap-4 md:flex-row md:justify-between'>
        <p className='text-center text-sm text-muted-foreground md:text-left'>
          &copy; {currentYear} Rob Royson. All rights reserved.
        </p>
        <div className='flex gap-4'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              href={link.url}
              target='_blank'
              rel='noopener noreferrer'
              className='text-sm font-medium text-muted-foreground hover:text-foreground'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

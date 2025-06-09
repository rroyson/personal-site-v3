'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Projects', path: '/projects' },
  { label: 'Resume', path: '/resume' },
  { label: 'Contact', path: '/contact' },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className='sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='container flex h-16 items-center justify-between'>
        <div className='flex gap-6 md:gap-10'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold'>Rob Royson</span>
          </Link>
        </div>
        <nav className='hidden md:flex gap-6'>
          {navItems.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                pathname === item.path
                  ? 'text-foreground'
                  : 'text-foreground/60'
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className='md:hidden'>
          <Button variant='ghost' size='icon' className='h-9 w-9 p-0'>
            <span className='sr-only'>Toggle menu</span>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='h-5 w-5'
            >
              <path d='M4 6h16M4 12h16M4 18h16'></path>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
}

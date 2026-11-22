'use client'

import { useState } from 'react'
import { skillGroups } from '@/data/skills'
import { ChevronIcon } from './icons'

/** Columns from md up; an accordion on phones, first group open. */
export function Skills() {
  const [open, setOpen] = useState<Record<string, boolean>>({ [skillGroups[0].id]: true })

  return (
    <div className='grid gap-0 md:grid-cols-2 md:gap-8 lg:grid-cols-4'>
      {skillGroups.map((group, i) => {
        const isOpen = Boolean(open[group.id])
        const panelId = `skill-${group.id}`
        return (
          <div
            key={group.id}
            className={`border-t md:pt-3 ${i === 0 ? 'md:border-t-2 md:border-accent' : ''} border-line-strong`}
          >
            <h3 className='font-display text-2xl font-semibold tracking-[-0.02em] text-ink'>
              {/* Phones: a toggle. Desktop: a plain heading, panel always shown. */}
              <button
                type='button'
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpen((o) => ({ ...o, [group.id]: !o[group.id] }))}
                className='flex min-h-14 w-full items-center justify-between gap-3 text-left md:hidden'
              >
                {group.title}
                <span className={`chev text-accent ${isOpen ? 'rotate-180' : ''}`}>
                  <ChevronIcon />
                </span>
              </button>
              <span className='hidden min-h-14 items-center md:flex'>{group.title}</span>
            </h3>
            <div id={panelId} className={`flex-col gap-3 pb-5 md:flex md:pb-0 ${isOpen ? 'flex' : 'hidden'}`}>
              <p className='text-base text-soft'>{group.blurb}</p>
              <p className='mt-1 flex flex-wrap gap-2 text-soft'>
                {group.core?.map((item) => (
                  <span key={item} className='chip border-accent-line'>
                    {item}
                  </span>
                ))}
                {group.items.map((item) => (
                  <span key={item} className='chip'>
                    {item}
                  </span>
                ))}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

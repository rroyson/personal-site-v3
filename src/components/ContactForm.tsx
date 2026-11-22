'use client'

import { useState } from 'react'
import { ArrowRightIcon, ErrorIcon } from './icons'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error'
  message?: string
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<FormStatus>({ type: 'idle' })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Keep the last message mounted while sending so it never vanishes without a transition.
    setStatus((prev) => ({ type: 'loading', message: prev.message }))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      const result = await response.json()

      if (response.ok) {
        setStatus({ type: 'success', message: "Sent. I'll reply soon." })
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus({
          type: 'error',
          message: result.error || 'That did not send. Try again, or reach me on LinkedIn.',
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'That did not send. Try again, or reach me on LinkedIn.',
      })
    }
  }

  const sending = status.type === 'loading'

  return (
    <form
      onSubmit={handleSubmit}
      aria-label='Contact form'
      className='overflow-hidden rounded-[20px] border border-line bg-surface'
    >
      <div className='grid grid-cols-1 border-b border-line sm:grid-cols-2'>
        <label className='field flex cursor-text flex-col gap-0.5 px-5 pt-3.5 pb-2.5 text-xs font-medium tracking-[0.02em] text-mute'>
          Name
          <input
            type='text'
            name='name'
            required
            autoComplete='name'
            enterKeyHint='next'
            value={formData.name}
            onChange={handleChange}
            placeholder='Your name'
            className='min-h-7 w-full bg-transparent py-1 text-base font-normal tracking-normal text-ink'
          />
        </label>
        <label className='field flex cursor-text flex-col gap-0.5 border-t border-line px-5 pt-3.5 pb-2.5 text-xs font-medium tracking-[0.02em] text-mute sm:border-t-0 sm:border-l'>
          Email
          <input
            type='email'
            name='email'
            required
            autoComplete='email'
            inputMode='email'
            autoCapitalize='off'
            spellCheck={false}
            enterKeyHint='next'
            value={formData.email}
            onChange={handleChange}
            placeholder='you@company.com'
            className='min-h-7 w-full bg-transparent py-1 text-base font-normal tracking-normal text-ink'
          />
        </label>
      </div>
      <label className='field flex cursor-text flex-col gap-0.5 px-5 py-3.5 text-xs font-medium tracking-[0.02em] text-mute'>
        Message
        <textarea
          name='message'
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder='What are you hiring for, or building?'
          className='grow-field min-h-24 w-full resize-none bg-transparent py-1 text-base leading-normal font-normal tracking-normal text-ink'
        />
      </label>

      {status.message && (
        <p
          role={status.type === 'error' ? 'alert' : 'status'}
          className='status mx-5 mb-3 flex items-center gap-3 rounded-lg bg-accent-tint px-4 py-3 text-sm font-medium text-ink'
        >
          {status.type === 'success' ? (
            <span aria-hidden='true' className='h-2 w-2 rounded-full bg-accent' />
          ) : (
            <ErrorIcon />
          )}
          {status.message}
        </p>
      )}

      <div className='flex flex-col items-stretch gap-3 border-t border-line p-3 pl-5 sm:flex-row sm:items-center sm:justify-between'>
        <span className='text-[13px] text-mute'>All fields required</span>
        <button type='submit' disabled={sending} className='btn btn-primary min-h-12 px-[22px] text-[15px]'>
          <span className='btn-labels'>
            <span aria-hidden={sending}>Send</span>
            <span aria-hidden={!sending}>Sending</span>
          </span>
          <ArrowRightIcon />
        </button>
      </div>
    </form>
  )
}

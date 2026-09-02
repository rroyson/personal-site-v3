'use client'

import { useState } from 'react'
import { ErrorIcon } from './icons'

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
          message: result.error || 'That did not send. Try again, or use the links below.',
        })
      }
    } catch {
      setStatus({
        type: 'error',
        message: 'That did not send. Try again, or use the links below.',
      })
    }
  }

  const sending = status.type === 'loading'

  return (
    <form onSubmit={handleSubmit} className='max-w-xl space-y-5'>
      <div className='grid grid-cols-1 gap-5 sm:grid-cols-2'>
        <div>
          <label htmlFor='name' className='mb-2 block text-sm font-medium text-ink'>
            Name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            required
            autoComplete='name'
            value={formData.name}
            onChange={handleChange}
            className='field'
            placeholder='Your name'
          />
        </div>
        <div>
          <label htmlFor='email' className='mb-2 block text-sm font-medium text-ink'>
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            required
            autoComplete='email'
            spellCheck={false}
            value={formData.email}
            onChange={handleChange}
            className='field'
            placeholder='you@company.com'
          />
        </div>
      </div>
      <div>
        <label htmlFor='message' className='mb-2 block text-sm font-medium text-ink'>
          Message
        </label>
        <textarea
          id='message'
          name='message'
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          className='field resize-y'
          placeholder='The role, the build, or just hello.'
        />
      </div>

      {status.message && (
        <p
          role={status.type === 'error' ? 'alert' : 'status'}
          className='status flex items-center gap-3 rounded-md border border-line bg-lift px-4 py-3 text-sm font-medium text-ink'
        >
          {status.type === 'success' ? (
            <span aria-hidden='true' className='h-2 w-2 rounded-full bg-amber' />
          ) : (
            <ErrorIcon />
          )}
          {status.message}
        </p>
      )}

      <button type='submit' disabled={sending} className='btn'>
        <span className='btn-labels'>
          <span aria-hidden={sending}>Send the note</span>
          <span aria-hidden={!sending}>Sending</span>
        </span>
        <span aria-hidden='true'>&rarr;</span>
      </button>
    </form>
  )
}

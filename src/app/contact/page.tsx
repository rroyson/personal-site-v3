'use client'

import { useState } from 'react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface FormValues {
  name: string
  email: string
  subject: string
  message: string
}

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    console.log('Form data:', data)
    toast.success('Message sent successfully!')
    reset()
    setIsSubmitting(false)
  }

  return (
    <div className='flex min-h-screen flex-col'>
      <Header />
      <main className='flex-1 container py-12'>
        <div className='max-w-2xl mx-auto'>
          <div className='text-center mb-10'>
            <h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4'>
              Get In Touch
            </h1>
            <p className='text-muted-foreground'>
              Have a question or want to work together? Feel free to contact me
              using the form below.
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-xl font-semibold mb-4'>
                Contact Information
              </h2>
              <div className='space-y-4'>
                <div className='flex items-start gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mt-0.5 text-muted-foreground'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg>
                  <div>
                    <h3 className='font-medium'>Email</h3>
                    <p className='text-muted-foreground'>email@example.com</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mt-0.5 text-muted-foreground'
                  >
                    <path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
                  </svg>
                  <div>
                    <h3 className='font-medium'>Phone</h3>
                    <p className='text-muted-foreground'>(123) 456-7890</p>
                  </div>
                </div>
                <div className='flex items-start gap-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='mt-0.5 text-muted-foreground'
                  >
                    <path d='M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z'></path>
                    <circle cx='12' cy='10' r='3'></circle>
                  </svg>
                  <div>
                    <h3 className='font-medium'>Location</h3>
                    <p className='text-muted-foreground'>City, Country</p>
                  </div>
                </div>
              </div>

              <h2 className='text-xl font-semibold mt-8 mb-4'>
                Connect With Me
              </h2>
              <div className='flex gap-4'>
                <a
                  href='https://github.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 border rounded-full hover:bg-secondary transition-colors'
                  aria-label='GitHub'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4'></path>
                    <path d='M9 18c-4.51 2-5-2-7-2'></path>
                  </svg>
                </a>
                <a
                  href='https://linkedin.com/in/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 border rounded-full hover:bg-secondary transition-colors'
                  aria-label='LinkedIn'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'></path>
                    <rect width='4' height='12' x='2' y='9'></rect>
                    <circle cx='4' cy='4' r='2'></circle>
                  </svg>
                </a>
                <a
                  href='https://twitter.com/yourusername'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-2 border rounded-full hover:bg-secondary transition-colors'
                  aria-label='Twitter'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path d='M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z'></path>
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h2 className='text-xl font-semibold mb-4'>Send Me a Message</h2>
              <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium mb-1'
                  >
                    Name
                  </label>
                  <Input
                    id='name'
                    {...register('name', { required: 'Name is required' })}
                    placeholder='Your name'
                    className={errors.name ? 'border-red-500' : ''}
                  />
                  {errors.name && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.name.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium mb-1'
                  >
                    Email
                  </label>
                  <Input
                    id='email'
                    type='email'
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                    placeholder='Your email'
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.email.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium mb-1'
                  >
                    Subject
                  </label>
                  <Input
                    id='subject'
                    {...register('subject', {
                      required: 'Subject is required',
                    })}
                    placeholder='Subject of your message'
                    className={errors.subject ? 'border-red-500' : ''}
                  />
                  {errors.subject && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.subject.message as string}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium mb-1'
                  >
                    Message
                  </label>
                  <Textarea
                    id='message'
                    {...register('message', {
                      required: 'Message is required',
                    })}
                    placeholder='Your message'
                    rows={5}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className='text-red-500 text-xs mt-1'>
                      {errors.message.message as string}
                    </p>
                  )}
                </div>

                <Button
                  type='submit'
                  className='w-full'
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

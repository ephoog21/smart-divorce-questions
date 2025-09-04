'use client'

import { useState } from 'react'

export default function NewsletterSignup() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email) {
      setStatus('error')
      setMessage('Please enter your email address')
      return
    }

    setStatus('loading')
    
    try {
      // For now, just simulate success since we don't have Railway DB set up
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setStatus('success')
      setMessage('Thanks for subscribing! You\'ll receive helpful divorce tips and updates.')
      setEmail('')
    } catch (error) {
      setStatus('error')
      setMessage('Something went wrong. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-green-50 p-4 rounded-lg">
        <p className="text-green-800 text-sm">{message}</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        className="w-full px-3 py-2 text-gray-900 text-sm rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border border-gray-300"
        disabled={status === 'loading'}
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-600 text-white px-3 py-2 text-sm rounded hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
      </button>
      {status === 'error' && (
        <p className="text-red-600 text-sm">{message}</p>
      )}
    </form>
  )
}
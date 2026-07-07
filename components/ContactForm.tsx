'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio Enquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
    window.location.href = `mailto:garbapulisic22@gmail.com?subject=${subject}&body=${body}`
  }

  const inputCls =
    'w-full bg-[#181717] border border-white/10 text-[#F5F5F5] px-4 py-3 font-body text-sm placeholder:text-[#6B7280]/60 focus:outline-none focus:border-[#DC2626] transition-colors duration-200'

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-[#6B7280] mb-2">
          Name
        </label>
        <input
          type="text"
          required
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-[#6B7280] mb-2">
          Email
        </label>
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputCls}
        />
      </div>
      <div>
        <label className="block font-body text-xs tracking-widest uppercase text-[#6B7280] mb-2">
          Message
        </label>
        <textarea
          required
          rows={6}
          placeholder="Tell me about your project..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputCls + ' resize-none'}
        />
      </div>
      <button
        type="submit"
        className="bg-[#DC2626] text-white font-body text-xs tracking-widest uppercase px-10 py-4 hover:bg-[#b91c1c] transition-colors duration-200 self-start"
      >
        Send Message
      </button>
    </form>
  )
}

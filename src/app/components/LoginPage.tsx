'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const res = await fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    const data = await res.json()
    setLoading(false)

    if (res.ok) {
      localStorage.setItem('token', data.token)
      localStorage.setItem('userName', data.user.name) // ✅ store user name
      router.push('/shop')
    } else {
      setError(data.message || 'Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row bg-gray-50 shadow-xl rounded-xl overflow-hidden max-w-4xl w-full">
        {/* Form Section */}
        <div className="w-full md:w-[60%] p-8 flex flex-col justify-center">
          <h1 className="text-2xl font-bold mb-6 text-gray-800 text-center">Welcome Back</h1>

          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}

          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              required
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mb-4 border border-gray-300 rounded-md"
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black text-white py-3 rounded-md hover:bg-gray-800"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>

          <p className="mt-4 text-sm text-center text-gray-600">
            Don’t have an account?{' '}
            <a href="/register" className="text-blue-600 underline">Register</a>
          </p>
        </div>

        {/* Image Section */}
        <div className="hidden md:block md:w-[40%] relative">
          <Image
            src="/home-img7.jpg"
            alt="Bonnie Culture"
            width={400}
            height={500}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  )
}

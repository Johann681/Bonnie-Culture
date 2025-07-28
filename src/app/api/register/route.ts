import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'

// Define the user type properly (no 'any')
type User = {
  id: number
  name: string
  email: string
  password: string // this will be the hashed password
}

const filePath = path.join(process.cwd(), 'users.json')

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json()

    if (!name || !email || !password) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      )
    }

    // Read existing users
    let users: User[] = []

    try {
      const fileData = await fs.readFile(filePath, 'utf-8')
      users = JSON.parse(fileData) as User[]
    } catch (err) {
      // File might not exist yet — that's okay
      users = []
    }

    // Check if user already exists
    const existingUser = users.find((user) => user.email === email)

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already registered' },
        { status: 400 }
      )
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser: User = {
      id: Date.now(),
      name,
      email,
      password: hashedPassword,
    }

    // Save new user
    users.push(newUser)
    await fs.writeFile(filePath, JSON.stringify(users, null, 2))

    return NextResponse.json({ message: 'User registered successfully' }, { status: 201 })
  } catch (err) {
    console.error('[REGISTER ERROR]', err)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}

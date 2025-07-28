import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import fs from 'fs/promises'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

type User = {
  id: number
  name: string
  email: string
  password: string
}

const filePath = path.join(process.cwd(), 'users.json')

// You can move this to .env later
const SECRET = 'bonnie_secret_key'

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json()

    if (!email || !password) {
      return NextResponse.json({ message: 'Email and password are required' }, { status: 400 })
    }

    const fileData = await fs.readFile(filePath, 'utf-8')
    const users: User[] = JSON.parse(fileData)

    const user = users.find((u) => u.email === email)

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 })
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
      return NextResponse.json({ message: 'Invalid credentials' }, { status: 401 })
    }

    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      SECRET,
      { expiresIn: '7d' }
    )

    return NextResponse.json({ token, user: { name: user.name, email: user.email } }, { status: 200 })
  } catch (err) {
    console.error('[LOGIN ERROR]', err)
    return NextResponse.json({ message: 'Server error' }, { status: 500 })
  }
}

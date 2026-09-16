import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const email = 'admin@apex.ir'
  const password = await bcrypt.hash('admin123', 10)

  const existingAdmin = await prisma.user.findUnique({
    where: { email },
  })

  if (!existingAdmin) {
    await prisma.user.create({
      data: {
        email,
        password,
        name: 'Apex Admin',
      },
    })
    console.log('Admin user created successfully!')
  } else {
    console.log('Admin user already exists.')
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

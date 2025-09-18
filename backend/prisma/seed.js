const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  // Create demo users
  await prisma.user.createMany({
    data: [
      {
        email: 'pm@example.com',
        password: '123456',
        role: 'PM'
      },
      {
        email: 'engineer1@example.com',
        password: '123456',
        role: 'ENG'
      },
      {
        email: 'engineer2@example.com',
        password: '123456',
        role: 'ENG'
      }
    ],
    skipDuplicates: true 
  });

  console.log('User table seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


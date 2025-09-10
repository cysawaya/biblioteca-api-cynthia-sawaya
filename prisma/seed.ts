import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  const email = 'admin@email.com';

  const existingUser = await prisma.user.findUnique({ where: { email } });

  if (existingUser) {
    console.log('Admin já existe, nada a fazer.');
    return;
  }

  const hashedPassword = await bcrypt.hash('123456', 10);

  await prisma.user.create({
    data: {
      name: 'Admin Master',
      email,
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  console.log('Usuário admin criado com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
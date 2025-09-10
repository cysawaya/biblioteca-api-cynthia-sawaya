import {
  BadRequestException,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLoanDto } from './dto/create-loan.dto';

@Injectable()
export class LoansService {
  constructor(private prisma: PrismaService) {}

  async borrowBook(userId: number, dto: CreateLoanDto) {
    const book = await this.prisma.book.findUnique({ where: { id: dto.bookId } });

    if (!book) throw new BadRequestException('Livro não encontrado');
    if (!book.available) throw new ForbiddenException('Livro não disponível');

    return this.prisma.$transaction([
      this.prisma.book.update({
        where: { id: dto.bookId },
        data: { available: false },
      }),
      this.prisma.loan.create({
        data: {
          bookId: dto.bookId,
          borrowerId: userId,
        },
      }),
    ]);
  }

  async returnBook(loanId: number, userId: number) {
    const loan = await this.prisma.loan.findUnique({
      where: { id: loanId },
      include: { book: true },
    });

    if (!loan) throw new BadRequestException('Empréstimo não encontrado');
    if (loan.returnedAt) throw new BadRequestException('Livro já foi devolvido');
    if (loan.borrowerId !== userId) throw new ForbiddenException('Acesso negado');

    return this.prisma.$transaction([
      this.prisma.book.update({
        where: { id: loan.bookId },
        data: { available: true },
      }),
      this.prisma.loan.update({
        where: { id: loanId },
        data: { returnedAt: new Date() },
      }),
    ]);
  }

  findUserLoans(userId: number) {
    return this.prisma.loan.findMany({
      where: { borrowerId: userId },
      include: { book: true },
    });
  }

  findAll() {
    return this.prisma.loan.findMany({
      include: {
        book: true,
        borrower: true,
      },
    });
  }
}
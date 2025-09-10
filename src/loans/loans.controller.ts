import {
  Controller,
  Post,
  Body,
  UseGuards,
  Request,
  Get,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { LoansService } from './loans.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { RolesGuard } from '../auth/roles.guard';
import { Roles } from '../auth/roles.decorator';

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('loans')
export class LoansController {
  constructor(private readonly loansService: LoansService) {}

  @Post('borrow')
  borrow(@Body() dto: CreateLoanDto, @Request() req: any) {
    return this.loansService.borrowBook(req.user.userId, dto);
  }

  @Post('return/:id')
  return(@Param('id', ParseIntPipe) loanId: number, @Request() req: any) {
    return this.loansService.returnBook(loanId, req.user.userId);
  }

  @Get('my')
  myLoans(@Request() req: any) {
    return this.loansService.findUserLoans(req.user.userId);
  }

  @Get()
  @Roles('ADMIN', 'COORDINATOR')
  findAll() {
    return this.loansService.findAll();
  }
}


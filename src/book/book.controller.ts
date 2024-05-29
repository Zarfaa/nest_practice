import { Controller, Post, Body, Get, UseGuards, Req, UseFilters } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { AuthGuard } from '@nestjs/passport';
import { HttpExceptionFilter } from '../exception.filter';
import { Request } from 'express';

export interface User {
  id: number;
  username: string;
}

@Controller('books')
@UseFilters(new HttpExceptionFilter())
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.create(createBookDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getBooks() {
    const books = await this.bookService.findAll();
    return {
      success: true,
      message: 'Books retrieved successfully',
      data: books,
    };
  }
}

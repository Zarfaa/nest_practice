import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../database/entity/book.entity';
import { CreateBookDto } from './dto/create-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private booksRepository: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto) {
    const { name, author, IBN, genre } = createBookDto;
    const userId = 1
    const newBook = this.booksRepository.create({
      name,
      author,
      IBN,
      genre,
      borrowerId : userId,
    });
    return await this.booksRepository.save(newBook);
  }

  async findAll() {
    return await this.booksRepository.find();
  }
}

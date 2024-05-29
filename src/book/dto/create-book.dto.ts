import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsNotEmpty()
  @ApiProperty()
  author: string;

  @IsNotEmpty()
  @ApiProperty()
  IBN: string;

  @IsNotEmpty()
  @ApiProperty()
  genre: string;
}

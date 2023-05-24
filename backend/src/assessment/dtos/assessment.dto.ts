import { Exclude, Expose, Type } from 'class-transformer';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsNumber,
  IsPositive,
  ValidateNested,
} from 'class-validator';

class Option {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsNumber()
  @IsPositive()
  weight: number;
}

export class QuestionResponseDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  question: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => Option)
  @Exclude()
  options: Option[];

  @Expose({ name: 'options' })
  filteredOptions() {
    return this.options.map(({ text }) => ({ text }));
  }

  constructor(partial: Partial<QuestionResponseDto>) {
    Object.assign(this, partial);
  }
}

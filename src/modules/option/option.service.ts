/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { CreateOptionDto } from './dto/create-option.dto';
import { UpdateOptionDto } from './dto/update-option.dto';
import { CreateOptionUseCase, ListOptionUseCase, DeleteOptionUseCase, FindOneOptionUseCase, UpdateOptionUseCase } from './use-case';

@Injectable()
export class OptionService {
  constructor(private readonly createOptionUseCase: CreateOptionUseCase, 
    private readonly listOptionUseCase: ListOptionUseCase, 
    private readonly findoneOptionUseCase: FindOneOptionUseCase,
    private readonly deleteOptionUseCase: DeleteOptionUseCase,
    private readonly updateOptionUseCase: UpdateOptionUseCase) { }
  
  create(data: CreateOptionDto) {
    return this.createOptionUseCase.execute(data);
  }

  findAll() {
    return this.listOptionUseCase.list();
  }

  findOne(id: string) {
    return this.findoneOptionUseCase.findone(id);
  }

  update(id: string, data: UpdateOptionDto) {
    return this.updateOptionUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteOptionUseCase.delete(id);
  }
}
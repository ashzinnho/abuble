/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, Logger } from '@nestjs/common';
import { CreateScenarioDto } from './dto/create-scenario.dto';
import { UpdateScenarioDto } from './dto/update-scenario.dto';
import { CreateScenarioUseCase, ListScenarioUseCase, DeleteScenarioUseCase, FindOneScenarioUseCase, UpdateScenarioUseCase } from './use-cases';

@Injectable()
export class ScenarioService {
  constructor(private readonly createScenarioUseCase: CreateScenarioUseCase, 
    private readonly listScenarioUseCase: ListScenarioUseCase, 
    private readonly findoneScenarioUseCase: FindOneScenarioUseCase,
    private readonly deleteScenarioUseCase: DeleteScenarioUseCase,
    private readonly updateScenarioUseCase: UpdateScenarioUseCase) { }
  
  create(data: CreateScenarioDto) {
    return this.createScenarioUseCase.execute(data);
  }

  findAll() {
    return this.listScenarioUseCase.list();
  }

  findOne(id: string) {
    return this.findoneScenarioUseCase.findone(id);
  }

  update(id: string, data: UpdateScenarioDto) {
    return this.updateScenarioUseCase.update(id, data);
  }

  remove(id: string) {
    return this.deleteScenarioUseCase.delete(id);
  }
}
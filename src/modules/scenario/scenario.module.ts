import { Module, Logger } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { ScenarioController } from './scenario.controller';
import { ShareModule } from 'src/shared/shared.module';
import * as UseCases from './use-cases';
import * as Repositories from './repository';

const useCases = Object.values(UseCases);
const repositories = Object.values(Repositories);

@Module({
  imports: [ShareModule],
  controllers: [ScenarioController],
  providers: [ScenarioService, ...useCases, ...repositories, Logger],
})
export class ScenarioModule {}

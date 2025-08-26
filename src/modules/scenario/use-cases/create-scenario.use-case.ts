import { Injectable, Logger} from "@nestjs/common";
import { CreateScenarioRepository } from "../repository/create-scenario.repository";
import { CreateScenarioDto } from "../dto/create-scenario.dto";

@Injectable()
export class CreateScenarioUseCase {
    constructor(
        private readonly createScenarioRepository: CreateScenarioRepository,
        private logger: Logger
    ){}

    async execute(data: CreateScenarioDto){
        try{
        const scenario = await this.createScenarioRepository.create(data)
        this.logger.log('Scenario created: ${scenario.title0}');
        return scenario;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}
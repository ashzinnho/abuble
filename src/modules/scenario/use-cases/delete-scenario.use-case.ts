import { Injectable, Logger } from '@nestjs/common';
import { DeleteScenarioRepository } from '../repository/delete-scenario.repository';

@Injectable()
export class DeleteScenarioUseCase {
    constructor(
        private readonly deleteScenarioRepository: DeleteScenarioRepository,
        private readonly logger: Logger,
    ) {}

    async delete(id:string) {
        try {
            const scenario = await this.deleteScenarioRepository.delete(id);
            this.logger.log("Scenario deleted successfully");
            return scenario;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
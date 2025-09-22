import { Injectable, Logger } from '@nestjs/common';
import { ListOptionRepository } from '../repository/listall-option.repository';

@Injectable()
export class ListOptionUseCase {
    constructor(
        private readonly listOptionRepository: ListOptionRepository,
        private readonly logger: Logger,
    ) {}

    async list(){
        try {
            const option = this.listOptionRepository.list();
            this.logger.log("Option listed successfully");
            return option;
        } catch (error) {
            this.logger.error(error);
            throw error;
        }
    }
}
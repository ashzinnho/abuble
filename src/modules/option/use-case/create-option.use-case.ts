import { Injectable, Logger} from "@nestjs/common";
import { CreateOptionRepository } from "../repository/create-option.repository";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class CreateOptionUseCase {
    constructor(
        private readonly createOptionRepository: CreateOptionRepository,
        private logger: Logger
    ){}

    async execute(data: CreateOptionDto){
        try{
        const option = await this.createOptionRepository.create(data)
        this.logger.log('Option created: ${option.title0}');
        return option;
    } catch (error){
        this.logger.error(error);
        throw error;
    }
}
}
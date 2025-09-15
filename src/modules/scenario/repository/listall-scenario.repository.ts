import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class ListScenarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const scenario = await this.prisma.scenario.findMany();
        if (!scenario) {throw new NotFoundException("Scenario not found");}
        return scenario;
    }
}
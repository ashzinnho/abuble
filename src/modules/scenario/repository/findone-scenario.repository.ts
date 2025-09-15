import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";


@Injectable()
export class FindOneScenarioRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id:string) {
        const scenario = await this.prisma.scenario.findUnique({ where: { id } });
        return scenario;
    }
}
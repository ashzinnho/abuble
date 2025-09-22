import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";


@Injectable()
export class FindOneOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async findone(id:string) {
        const option = await this.prisma.option.findUnique({ where: { id } });
        return option;
    }
}
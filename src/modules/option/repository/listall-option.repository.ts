import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";

@Injectable()
export class ListOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async list(){
        const option = await this.prisma.option.findMany();
        if (!option) {throw new NotFoundException("option not found");}
        return option;
    }
}
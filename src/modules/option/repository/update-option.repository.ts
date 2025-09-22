import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/shared/database/prisma.database";
import { UpdateOptionDto } from "../dto/update-option.dto";

@Injectable()
export class UpdateOptionRepository {
    constructor(private readonly prisma: PrismaService) { }

    async update(id:string, data: UpdateOptionDto) {
        const option = await this.prisma.option.update({
            where: { id },
            data
        });
        return option;
    }
}
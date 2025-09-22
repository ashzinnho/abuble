import { Injectable } from "@nestjs/common";
import { Option } from "@prisma/client";
import { PrismaService } from "src/shared/database/prisma.database";
import { CreateOptionDto } from "../dto/create-option.dto";

@Injectable()
export class CreateOptionRepository {
    constructor(private readonly prisma: PrismaService){}

    async create(data: CreateOptionDto) {
        const option = await this.prisma.option.create({
            data,
        });
        return option;
    }
}
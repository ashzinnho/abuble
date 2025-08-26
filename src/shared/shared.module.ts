import { Global, Logger } from "@nestjs/common";
import { Module } from "@nestjs/common";
import { PrismaService } from "./database/prisma.database";

@Global()
@Module({
    imports: [],
    providers: [PrismaService, Logger],
    exports:[PrismaService],
})
export class ShareModule {}
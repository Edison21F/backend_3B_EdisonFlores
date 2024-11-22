import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateNewTable1732282995004 implements MigrationInterface {
    name = 'CreateNewTable1732282995004'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" RENAME COLUMN "imagen" TO "image"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "producto" RENAME COLUMN "image" TO "imagen"`);
    }

}

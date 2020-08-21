import {MigrationInterface, QueryRunner} from "typeorm";

export class fixRoles1597986211807 implements MigrationInterface {
    name = 'fixRoles1597986211807'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "dionescript" TO "description"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" RENAME COLUMN "description" TO "dionescript"`);
    }

}

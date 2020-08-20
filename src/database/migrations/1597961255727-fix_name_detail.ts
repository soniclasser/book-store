import {MigrationInterface, QueryRunner} from "typeorm";

export class fixNameDetail1597961255727 implements MigrationInterface {
    name = 'fixNameDetail1597961255727'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "username" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" DROP NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "username" SET NOT NULL`);
    }

}

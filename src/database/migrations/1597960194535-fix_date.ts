import {MigrationInterface, QueryRunner} from "typeorm";

export class fixDate1597960194535 implements MigrationInterface {
    name = 'fixDate1597960194535'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "create_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "create_at" SET DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" SET DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "roles" ALTER COLUMN "create_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users" ALTER COLUMN "create_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "updated_at" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "users_details" ALTER COLUMN "create_at" DROP DEFAULT`);
    }

}

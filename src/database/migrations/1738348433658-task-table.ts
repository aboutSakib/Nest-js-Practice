import { MigrationInterface, QueryRunner } from 'typeorm';

export class TaskTable1738348433658 implements MigrationInterface {
  name = 'TaskTable1738348433658';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`isCompleted\``);
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`CreateAt\``);
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`user_id\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`is_completed\` tinyint NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`created_at\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`updated_at\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`created_at\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` DROP COLUMN \`is_completed\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`user_id\` int NULL DEFAULT 'NULL'`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`updatedAt\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`CreateAt\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`isCompleted\` tinyint NOT NULL`,
    );
  }
}

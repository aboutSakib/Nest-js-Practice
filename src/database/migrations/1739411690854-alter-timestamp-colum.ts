import { MigrationInterface, QueryRunner } from 'typeorm';

export class AlterTimestampColum1739411690854 implements MigrationInterface {
  name = 'AlterTimestampColum1739411690854';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`createdAt\``);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`updatedAt\``);
    await queryRunner.query(
      `ALTER TABLE \`student\` DROP COLUMN \`createdAt\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`student\` DROP COLUMN \`updatedAt\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`class\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`class\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );

    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`created_at\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`updated_at\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(`ALTER TABLE \`task\` DROP COLUMN \`created_at\``);
    await queryRunner.query(
      `ALTER TABLE \`task\` ADD \`created_at\` varchar(255) NOT NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`student\` DROP COLUMN \`updated_at\``,
    );
    await queryRunner.query(
      `ALTER TABLE \`student\` DROP COLUMN \`created_at\``,
    );
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`updated_at\``);
    await queryRunner.query(`ALTER TABLE \`class\` DROP COLUMN \`created_at\``);
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`updatedAt\` varchar(255) NOT NULL DEFAULT ''CURRENT_TIMESTAMP''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`createdAt\` varchar(255) NOT NULL DEFAULT ''CURRENT_TIMESTAMP''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`class\` ADD \`updatedAt\` varchar(255) NOT NULL DEFAULT ''CURRENT_TIMESTAMP''`,
    );
    await queryRunner.query(
      `ALTER TABLE \`class\` ADD \`createdAt\` varchar(255) NOT NULL DEFAULT ''CURRENT_TIMESTAMP''`,
    );
  }
}

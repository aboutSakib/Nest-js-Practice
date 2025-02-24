import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClassTable1738432881654 implements MigrationInterface {
  name = 'CreateClassTable1738432881654';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`class\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`room_number\` varchar(255) NULL, \`createdAt\` varchar(255) NOT NULL DEFAULT 'CURRENT_TIMESTAMP', \`updatedAt\` varchar(255) NOT NULL DEFAULT 'CURRENT_TIMESTAMP', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` CHANGE \`created_at\` \`created_at\` varchar(255) NOT NULL`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` CHANGE \`updated_at\` \`updated_at\` varchar(255) NOT NULL`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`task\` CHANGE \`updated_at\` \`updated_at\` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP()`,
    );
    await queryRunner.query(
      `ALTER TABLE \`task\` CHANGE \`created_at\` \`created_at\` varchar(255) NOT NULL DEFAULT CURRENT_TIMESTAMP()`,
    );
    await queryRunner.query(`DROP TABLE \`class\``);
  }
}

import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateStudentTable1738596282598 implements MigrationInterface {
  name = 'CreateStudentTable1738596282598';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`student\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`age\` int NOT NULL, \`roll\` int NULL, \`createdAt\` varchar(255) NOT NULL DEFAULT 'CURRENT_TIMESTAMP', \`updatedAt\` varchar(255) NOT NULL DEFAULT 'CURRENT_TIMESTAMP', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE \`student\``);
  }
}

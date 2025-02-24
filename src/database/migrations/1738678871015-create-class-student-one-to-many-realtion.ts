import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateClassStudentOneToManyRealtion1738678871015
  implements MigrationInterface
{
  name = 'CreateClassStudentOneToManyRealtion1738678871015';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`student\` ADD \`class_id\` int NULL`,
    );

    await queryRunner.query(
      `ALTER TABLE \`student\` ADD CONSTRAINT \`FK_85874ee23f2927b59ff5f769f3c\` FOREIGN KEY (\`class_id\`) REFERENCES \`class\`(\`id\`) ON DELETE SET NULL ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`student\` DROP FOREIGN KEY \`FK_85874ee23f2927b59ff5f769f3c\``,
    );

    await queryRunner.query(`ALTER TABLE \`student\` DROP COLUMN \`class_id\``);
  }
}

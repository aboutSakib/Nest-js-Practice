import { MigrationInterface, QueryRunner } from "typeorm";

export class  $npmConfigName1736699250795 implements MigrationInterface {
    name = ' $npmConfigName1736699250795'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`task\` (\`id\` int NOT NULL AUTO_INCREMENT, \`task\` varchar(255) NOT NULL, \`isCompleted\` tinyint NOT NULL, \`CreateAt\` varchar(255) NOT NULL, \`updatedAt\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`task\``);
    }

}

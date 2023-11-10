import { Table, type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateTableLogError1699622072323 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'log_error',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid'
          },
          {
            name: 'stack',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'date',
            type: 'timestamptz',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('log_error')
  }
}

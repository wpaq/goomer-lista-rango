import { Table, type MigrationInterface, type QueryRunner } from 'typeorm'

export class CreateTableRestaurants1699390323678 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'restaurants',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()'
          },
          {
            name: 'photo',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'address',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'openingHours',
            type: 'varchar',
            isNullable: false
          }
        ]
      })
    )
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('restaurants')
  }
}

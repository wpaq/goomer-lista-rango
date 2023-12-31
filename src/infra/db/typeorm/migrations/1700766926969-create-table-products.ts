import { type MigrationInterface, type QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm'

export class CreateTableProducts1700766926969 implements MigrationInterface {
  public async up (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
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
            name: 'price',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'category',
            type: 'varchar',
            isNullable: false
          },
          {
            name: 'promotionalDescription',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'promotionalPrice',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'promotionalDays',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'promotionalHours',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'restaurantId',
            type: 'uuid'
          }
        ]
      })
    )

    await queryRunner.createIndex(
      'products',
      new TableIndex({
        name: 'IDX_PRODUCTS_ID',
        columnNames: ['id']
      })
    )

    await queryRunner.createForeignKey('products', new TableForeignKey({
      columnNames: ['restaurantId'],
      referencedColumnNames: ['id'],
      referencedTableName: 'restaurants',
      onDelete: 'CASCADE'
    }))
  }

  public async down (queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'FK_Product_Restaurant')
    await queryRunner.dropTable('products')
  }
}

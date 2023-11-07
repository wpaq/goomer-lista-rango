import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity()
export class Restaurant {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({
    nullable: false
  })
    photo: string

  @Column({
    nullable: false
  })
    name: string

  @Column({
    nullable: false
  })
    address: string

  @Column({
    nullable: false
  })
    openingHours: string
}

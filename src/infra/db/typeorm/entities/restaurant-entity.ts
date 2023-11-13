import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('restaurants')
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

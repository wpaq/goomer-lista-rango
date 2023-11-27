import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Product } from './product-entity'

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

  @OneToMany(() => Product, product => product.restaurant)
    products: Product[]
}

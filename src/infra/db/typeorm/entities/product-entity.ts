import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm'
import { Restaurant } from './restaurant-entity'

@Entity('products')
export class Product {
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
    price: string

  @Column({
    nullable: false
  })
    category: string

  @Column({
    nullable: true
  })
    promotionalDescription: string

  @Column({
    nullable: true
  })
    promotionalPrice: string

  @Column({
    nullable: true
  })
    promotionalDays: string

  @Column({
    nullable: true
  })
    promotionalHours: string

  @ManyToOne(() => Restaurant, restaurant => restaurant.products, { onDelete: 'CASCADE' })
    restaurant: Restaurant

  @Column()
    restaurantId: string
}

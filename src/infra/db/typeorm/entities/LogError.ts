import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('log_error')
export class LogError {
  @PrimaryGeneratedColumn('uuid')
    id: string

  @Column({
    nullable: false
  })
    stack: string

  @Column({
    type: 'timestamptz',
    nullable: false
  })
    date: Date
}

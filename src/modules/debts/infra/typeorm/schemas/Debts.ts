import {
  ObjectIdColumn,
  ObjectID,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  Entity,
} from 'typeorm';

@Entity('debts')
class Debts {
  @ObjectIdColumn()
  id: ObjectID;

  @Column()
  user_id: number;

  @Column()
  description: string;

  @Column()
  value: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Debts;

import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Teaching {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  book: string;

  @Column()
  chapter: number;

  @Column({ type: 'longtext' })
  text: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: number;
}

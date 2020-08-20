import { BaseEntity, Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users_details')
export class UserDetails extends BaseEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({type: 'varchar', unique: true, length:50, nullable: true })
    username: string;

    @Column({type: 'varchar', nullable: true })
    lastname:string;

    @Column({type: 'varchar',default:'ACTIVE' , length: 8 })
    status:string;

    @CreateDateColumn({type: 'timestamp', name:'create_at', nullable: true })
    createdAt: Date;

    @UpdateDateColumn({type: 'timestamp', name:'updated_at', nullable: true })
    updatedAt: Date;
}
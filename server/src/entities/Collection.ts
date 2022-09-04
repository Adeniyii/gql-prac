import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@ObjectType()
@Entity()
export class Collection extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

	@Field()
	@Column()
	ownerId!: number

  @ManyToOne(() => User, (user) => user.collections)
  owner!: User;

  @ManyToMany(() => Book)
  @JoinTable()
  books!: Book[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}

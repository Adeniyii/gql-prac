import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserBookMetadata } from "./UserBookMetadata";

@ObjectType()
@Entity()
export class Book extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  title!: string;

  @Field()
  @Column()
  author!: string;

  @Field(() => String)
  @Column({ type: "date" })
  publishedAt!: Date;

  @OneToMany(() => UserBookMetadata, userBookMetadata => userBookMetadata.book)
  userBookMetadata!: UserBookMetadata[];
}

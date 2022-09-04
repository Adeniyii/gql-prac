import { Field, Int, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@ObjectType()
@Entity()
export class UserBookMetadata extends BaseEntity {
  @PrimaryColumn()
  userId!: number;

  @PrimaryColumn()
  bookId!: number;

  @Field(() => Int)
  @Column({ default: 0 })
  readCount: number;

  @Field(() => Int)
  @Column({ nullable: true })
  rating: number;

  @ManyToOne(() => User, (user) => user.userBookMetadata, {
    onDelete: "CASCADE",
  })
  user!: User;

  @ManyToOne(() => Book, (book) => book.userBookMetadata, {
    onDelete: "CASCADE",
  })
  book!: Book;
}

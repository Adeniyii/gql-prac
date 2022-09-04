import { Field, ID, ObjectType } from "type-graphql";
import { BaseEntity, Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./Book";
import { User } from "./User";

@ObjectType()
@Entity()
export class UserBookMetadata extends BaseEntity {
  @Field()
  @PrimaryColumn()
  userId!: number;

  @Field()
  @PrimaryColumn()
  bookId!: number;

  @Field()
  @Column({default: 0})
  readCount: number;

  @Field()
  @Column({nullable: true})
  rating: number;

  @ManyToOne(() => User, (user) => user.userBookMetadata)
  user!: User

  @ManyToOne(() => Book, (book) => book.userBookMetadata)
  book!: Book
}

import { Field, ID, ObjectType, registerEnumType } from "type-graphql";
import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Collection } from "./Collection";
import { UserBookMetadata } from "./UserBookMetadata";

export enum SubscriptionEnum {
  daily = "daily",
  weekly = "weekly",
  monthly = "monthly",
}

registerEnumType(SubscriptionEnum, {
  name: "Subscription"
})

export enum RoleEnum {
  ADMIN = "ADMIN",
  BASIC = "BASIC",
}

registerEnumType(RoleEnum, {
  name: "Role"
})

@Entity()
@ObjectType()
export class User extends BaseEntity {
  // extending BaseEntity allows us to access query methods directly on the User class
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: number;

  @Column({ unique: true })
  @Field()
  username!: string;

  @Column({ unique: true })
  @Field()
  email!: string;

  @Column()
  password!: string;

  @Field(() => RoleEnum)
  @Column({ type: "enum", enum: ["ADMIN", "BASIC"], default: "BASIC" })
  role!: RoleEnum;

  @Column({ type: "enum", enum: ["daily", "weekly", "monthly"] })
  @Field(() => SubscriptionEnum)
  subscription!: SubscriptionEnum;

  @OneToMany(() => Collection, (collection) => collection.owner, {nullable: true})
  collections: Collection[]

  @OneToMany(() => UserBookMetadata, userBookMetadata => userBookMetadata.user)
  userBookMetadata!: UserBookMetadata[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}

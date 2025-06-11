import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Credential } from "./Credential";
import { Appt } from "./Appt";

@Entity({
  name: "users",
})
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToOne(() => Credential, credential => credential.user)
  @JoinColumn()
  credential: Credential;

  @OneToMany(() => Appt, appt => appt.user)
  appointments: Appt[];
}

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";

@Entity({
    name: "appointments",
})
export class Appt {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    time: string;

    @Column()
    userId: number;

    @Column()
    status: string;

    @ManyToOne(() => User, user => user.appointments)
    user: User;
}
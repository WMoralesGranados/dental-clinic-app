import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { User } from "./User";
import { STATUS } from "../enums/enums";

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

    @Column({
        default: "active"
    })
    status: STATUS;

    @ManyToOne(() => User, user => user.appointments)
    user: User;
}
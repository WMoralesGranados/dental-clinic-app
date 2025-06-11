import { STATUS } from "../enums/enums";


interface IAppt {
    id: number;
    date: Date;
    time: string;
    userId: number;
    status: STATUS;
}

export default IAppt;
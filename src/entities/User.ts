import { uuid } from "uuidv4";

export class User {
    public readonly id: string;

    public name: string;
    public email: string;
    public password: string;

    constructor(props: Omit<User, 'id'>, id?: string) {
        //passa todas as propriedades de props para this
        Object.assign(this, props);

        if (!id) {
            this.id = uuid()
        }

    }
}
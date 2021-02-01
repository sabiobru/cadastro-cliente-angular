import { ClienteModel } from './../Client/client.model';

export class PostsBlogModel {
    public constructor(init?: Partial<PostsBlogModel>) {
        Object.assign(this, init);
        this.clientId = [];
        if (init) {
            init.clientId.forEach(client => this.clientId.push(new ClienteModel(client)));
        }
    }
    id: number;
    areaCode: string;
    phoneNumber: string;
    clientId: ClienteModel[];
}

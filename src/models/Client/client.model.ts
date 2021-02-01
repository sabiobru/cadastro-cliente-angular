export class ClienteModel {
  public constructor(init?: Partial<ClienteModel>) {
    Object.assign(this, init);
  }
  id: any;
  name: any;
  type: any;
  identityDocument: any;
  registrationNumber: any;
  registrationDate: any;
  status: any;
}

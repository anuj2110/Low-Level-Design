export default interface DatabaseInterface {
  create(user:string,record: any): void;
  update(user:string,id: number, updatedData: any): void;
  delete(user:string,id: number): void;
  read(user:string,id: number): any;
}

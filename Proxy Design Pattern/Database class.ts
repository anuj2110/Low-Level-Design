import DatabaseInterface from "./Database interface";

export default class DatabaseClass implements DatabaseInterface {
  records: { [key: string]: any } = {};

  create(user:string,record: any): void {
    this.records[record.id] = record;
  }
  update(user:string,id: number, updatedData: any): void {
    this.records[id] = updatedData;
  }
  delete(user:string,id: number): void {
    delete this.records[id];
  }
  read(user:string,id: number): any {
    return this.records[id]
  }
}

import DatabaseClass from "./Database class";
import DatabaseInterface from "./Database interface";

export default class DatabaseProxy implements DatabaseInterface {
  databaseObj: DatabaseClass;
  constructor(databaseObj: DatabaseClass) {
    this.databaseObj = databaseObj;
  }
  create(user: string, record: any): void {
    if (user !== "ADMIN") {
      console.log("Not enough permissions to create record");
    }
    this.databaseObj.create(user, record);
  }
  update(user: string, id: number, updatedData: any): void {
    if (user !== "ADMIN") {
      console.log("Not enough permissions to update record");
    }
    this.databaseObj.update(user, id, updatedData);
  }
  delete(user: string, id: number): void {
    if (user !== "ADMIN") {
      console.log("Not enough permissions to delete record");
    }
    this.databaseObj.delete(user, id);
  }
  read(user: string, id: number): void {
    return this.databaseObj.read(user, id);
  }
}

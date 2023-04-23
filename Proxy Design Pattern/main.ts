import DatabaseProxy from "./Database Proxy";
import DatabaseClass from "./Database class";

function main() {
  let databaseInstance = new DatabaseProxy(new DatabaseClass());
  let user1 = "ADMIN";
  let user2 = "EMPLOYEE";

  databaseInstance.create(user2, { id: 1, text: "hey" }); // Will give error
  databaseInstance.create(user1, { id: 1, text: "hey" }); // Will create the data
  console.log(databaseInstance.read(user2, 1)); // Will show the data
}

main();

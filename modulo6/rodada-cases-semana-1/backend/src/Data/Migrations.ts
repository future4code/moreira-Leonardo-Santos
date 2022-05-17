import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
  public printError = (error: any) => {
    console.log(error.sqlMessage || error.message);
  };

  public createTables = () =>
    this.connection
      .raw(`
         CREATE TABLE IF NOT EXISTS mama_lelo_pizzas(
           id VARCHAR(255) PRIMARY KEY,
           name VARCHAR(255) UNIQUE NOT NULL,
           price FLOAT NOT NULL
         );

         CREATE TABLE IF NOT EXISTS mama_lelo_orders(
           id VARCHAR(255) PRIMARY KEY,
           pizza VARCHAR(255) NOT NULL,
           quantity FLOAT NOT NULL
         )
      `)
      .then(() => {
        console.log("Tabelas criadas");
      })
      .catch(this.printError);

  public closeConnection = () => {
    this.connection.destroy();
  };
}

const myMigrations = new Migrations();

myMigrations.createTables().finally(myMigrations.closeConnection);

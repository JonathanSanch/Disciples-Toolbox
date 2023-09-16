import { Elysia } from "elysia";
import { Database } from "bun:sqlite"

const app = new Elysia()
  .get("/api", () => "Hello Elysia")
  .get('/api2', () => 'Test Elysia')
  .listen(5000);

const db = new Database("mydb.sqlite", { create: true });
const query = db.query(`select $message;`);
console.log(query.all({ $message: "Hello world" }));

console.log(
  `Backend Server is running at ${app.server?.hostname}:${app.server?.port}`
);

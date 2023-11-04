import { Pool } from "pg";

const database = new Pool({
	user: "postgres",
	host: "localhost",
	database: "tsk",
	password: "badpassword",
	port: 5432,
});

export default database;

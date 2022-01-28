import express from "express";
import mongoose from "mongoose"
import { graphqlHTTP } from "express-graphql";
import cors from "cors"

import 'dotenv/config' 

// To deal with ES6 syntax 
import path from "path";
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import schema from "./schema/schema.js";

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once("open", () => console.log(`connected to database!`))


const app = express()
app.use(cors())

app.use(express.static(path.join(__dirname, './client/build')));


app.use("/graphql", graphqlHTTP({
	schema,
	graphiql: true
}))

// Serving to frontend
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname + './client/build/index.html'));
});


const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})

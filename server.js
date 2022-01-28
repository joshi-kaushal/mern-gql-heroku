import express from "express";
import { graphqlHTTP } from "express-graphql";
import mongoose from "mongoose"
import cors from "cors"

import 'dotenv/config' 

import schema from "./schema/schema.js";

mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.once("open", () => console.log(`connected to database!`))


const app = express()
app.use(cors())

app.use("/graphql", graphqlHTTP({
	schema,
	graphiql: true
}))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
})

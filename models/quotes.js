import mongoose from 'mongoose'

const Schema = mongoose.Schema

const quotesSchema = new Schema({
	quote: String,
	author: String,
})

const Quotes = mongoose.model('Quotes', quotesSchema);
export default Quotes 
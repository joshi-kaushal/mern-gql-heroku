import graphql,
{
	GraphQLID,
	GraphQLObjectType,
	GraphQLString,
	GraphQLSchema,
	GraphQLList,
	GraphQLNonNull
}
from "graphql"

import Quotes from "../models/quotes.js"

const QuoteType = new GraphQLObjectType({
	name: "Quote",
	fields: () => ({
		id: { type: GraphQLID },
		quote: { type: GraphQLString },
		author: { type: GraphQLString }
	})
})

const RootQuery = new GraphQLObjectType({
	name: "RootQueryType",
	fields: {
		quotes:{
			type: new GraphQLList(QuoteType),

			resolve(parent, args) {
				return Quotes.find()
			}
		}
	}
})

const Mutation = new GraphQLObjectType({
	name: "Mutation",
	fields:{
		addQuote: {
			type: QuoteType,
			args: {
				quote: { type: new GraphQLNonNull(GraphQLString) },
				author: { type: new GraphQLNonNull(GraphQLString) }
			},

			resolve(parent, args) {
				let newQuote = new Quotes({
					quote: args.quote,
					author: args.author
				})
				return newQuote.save()
			}
		}
	}
})

export default new GraphQLSchema({
	query: RootQuery,
	mutation: Mutation
})
import { gql } from "@apollo/client";

export const addQuoteMutation = gql`
	mutation addQuote($quote: String!, $author: String!) {
		addQuote(quote:$quote, author:$author) {
			quote
			author
		}
	}
`

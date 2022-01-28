import { useState } from 'react';

import { useQuery, useMutation } from "@apollo/client";

import { getQuotesQuery } from "../gql/queries.js"
import { addQuoteMutation } from "../gql/mutations.js"


export const AddQuote = () => {
	const [quote, setQuote] = useState("")
	const [author, setAuthor] = useState("")

	const { loading, error, data } = useQuery(getQuotesQuery)

	const [addQuote] = useMutation(addQuoteMutation, {
		variables: { quote, author },
		refetchQueries: [{ query: getQuotesQuery }]
	})

	const handleSubmit = e => {
		e.preventDefault()
		addQuote()
	}

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<form id='add-book' onSubmit={handleSubmit}>
			<div className="field">
				<label>Quote</label>
				<input type="text" onChange={e => setQuote(e.target.value)} />
			</div>
			<div className="field">
				<label>Author:</label>
				<input type="text" onChange={e => setAuthor(e.target.value)} />
			</div>
			
			<button>Add Quote</button>

		</form>
	)

}
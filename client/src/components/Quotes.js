import { useQuery } from "@apollo/client";

import { getQuotesQuery } from "../gql/queries"

export const Quotes = () => {

	const { loading, error, data } = useQuery(getQuotesQuery)

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	console.log(data);
	if (data.quotes) {
		return <div id="quotes">
			<h2>Quotes</h2>
			{
				data.quotes.map(quote => {
					return <li key={quote.index}>
						{quote.quote} --
						{quote.author}
					</li>
				})
			}
		</div>
	} else return <p></p>
}
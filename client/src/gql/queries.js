import { gql } from "@apollo/client";

export const getQuotesQuery = gql`
 {
  quotes{
	id
	quote
	author
  }
}
`

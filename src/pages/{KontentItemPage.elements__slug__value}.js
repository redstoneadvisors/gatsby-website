import * as React from 'react';
import {graphql} from 'gatsby';

const Page = ({data: {kontentItemPage: data}}) => {
	return (
		<div>
			<h1>{data.elements.title.value}</h1>
		</div>
	);
}

export default Page;

export const query = graphql`
	query($id: String) {
		kontentItemPage(id: {eq: $id}) {
			elements {
				meta_description {
					value
				}
				title {
					value
				}
				
				slug {
					value
				}
			}
			system {
				id
				language
			}
		}
	}
`;

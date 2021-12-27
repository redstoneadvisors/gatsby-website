import * as React from 'react';
import {graphql} from 'gatsby';
import Master from '../template/Master';
import PageSections from '../template/PageSections';

// markup
const HomePage = ({data: {kontentItemHomepage}}) => {
	// console.log(kontentItemHomepage, kontentItemSiteFooter);
	return (
		<Master
			headerData={kontentItemHomepage}
			footerData={{data: 'replacewithrealdata'}}>
			{kontentItemHomepage.elements.sections.value.map((section, key) => {
				return <PageSections key={key} section={section} />;
			})}
		</Master>
	);
};

export default HomePage;

export const EnglishHomeQuery = graphql`
	query EnglishHomeQuery {
		kontentItemHomepage(preferred_language: {eq: "default"}) {
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
				sections {
					value {
						...PageSectionFragment
					}
				}
			}
			system {
				id
				type
				language
			}
			preferred_language
		}
	}
`;

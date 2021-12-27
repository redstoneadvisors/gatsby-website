import React from 'react';
import {graphql} from 'gatsby';

import PageHero from './PageHero';

const PageSections = ({section}) => {
	// console.log(section);
	switch (section.system.type) {
		case 'page_hero': {
			return <PageHero section={section} />;
		}
		default:
			return null;
	}
};

export default PageSections;

export const PageSectionFragment = graphql`
	fragment PageSectionFragment on Node {
		id
		... on kontent_item_page_hero {
			...PageHeroFragment
		}
	}
`;

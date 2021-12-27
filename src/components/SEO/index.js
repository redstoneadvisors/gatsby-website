import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import {useStaticQuery, graphql} from 'gatsby';

const SEO = ({description, lang, meta, title, image, legacyImage}) => {
	const site = useStaticQuery(
		graphql`
			query {
				kontentItemSiteMetadata {
					elements {
						site_author {
							value
						}
						site_description {
							value
						}
						site_title {
							value
						}
						social_image {
							value {
								url
							}
						}
					}
				}
			}
		`
	);

	const metaTitle = title;
	const metaDescription =
		description ||
		site.kontentItemSiteMetadata.elements.site_description.value;

	const articleOgImage = image ? `${image.url}:Social` : legacyImage;
	const defaultOgImage = JSON.parse(
		site.kontentItemSiteMetadata.elements.social_image.value
	).url;
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.kontentItemSiteMetadata.elements.site_title.value}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: metaTitle,
				},
				{
					property: `og:image`,
					content: articleOgImage ? articleOgImage : defaultOgImage,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content:
						site.kontentItemSiteMetadata.elements.site_author
							.value || 'Georgia-Pacific',
				},
				{
					name: `twitter:title`,
					content: metaTitle,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

SEO.propTypes = {
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
};

export default SEO;

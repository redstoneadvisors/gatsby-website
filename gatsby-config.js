require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
	siteMetadata: {
		title: 'KCM Starter',
		description: `Site description`,
		author: `Koch Communications Marketing`,
		siteUrl: `https://www.replaceme.com`,
	},
	plugins: [
		{
			resolve: '@kentico/gatsby-source-kontent',
			options: {
				projectId: process.env.KONTENT_PROJECT_ID,
				usePreviewUrl:
					process.env.KONTENT_PREVIEW_ENABLED &&
					process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() ===
						'true',
				includeTaxonomies: true,
				authorizationKey:
					process.env.KONTENT_PREVIEW_ENABLED &&
					process.env.KONTENT_PREVIEW_ENABLED.toLowerCase() === 'true'
						? process.env.KONTENT_PREVIEW_KEY
						: undefined,
				languageCodenames: process.env.KONTENT_LANGUAGE_CODENAMES.split(
					','
				).map((lang) => lang.trim()),
			},
		},
		'gatsby-plugin-image',
		{
			resolve: 'gatsby-plugin-google-analytics',
			options: {
				trackingId: 'UA-000000000',
			},
		},
		'gatsby-plugin-react-helmet',
		{
			resolve: `gatsby-plugin-react-helmet-canonical-urls`,
			options: {
				siteUrl: `https://www.replaceme.com`,
			},
		},
		'gatsby-plugin-sitemap',
		'gatsby-plugin-sharp',
		'gatsby-transformer-sharp',
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: './src/images/',
			},
			__key: 'images',
		},
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				// Add any options here
			},
		},
		{
			resolve: 'gatsby-plugin-react-svg',
			options: {
				rule: {
					include: /\.inline\.svg$/,
				},
			},
		},
		{
			resolve: 'gatsby-plugin-google-tagmanager',
			options: {
				id: 'YOUR_GOOGLE_TAGMANAGER_ID',

				// Include GTM in development.
				//
				// Defaults to false meaning GTM will only be loaded in production.
				includeInDevelopment: true,

				// datalayer to be set before GTM is loaded
				// should be an object or a function that is executed in the browser
				//
				// Defaults to null
				defaultDataLayer: {platform: 'gatsby'},

				// Specify optional GTM environment details.
				// gtmAuth: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING',
				// gtmPreview: 'YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME',
				// dataLayerName: 'YOUR_DATA_LAYER_NAME',

				// Name of the event that is triggered
				// on every Gatsby route change.
				//
				// Defaults to gatsby-route-change
				// routeChangeEventName: 'YOUR_ROUTE_CHANGE_EVENT_NAME',
			},
		},
	],
};

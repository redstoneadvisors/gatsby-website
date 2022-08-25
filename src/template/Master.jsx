import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import KontentSmartLink from '@kentico/kontent-smart-link';
import {Helmet} from 'react-helmet';
import {motion} from 'framer-motion';
import styled from 'styled-components';
import ThemeWrapper from './ThemeWrapper';
import Header from './Header';
import Footer from './Footer';

const ContentWrapper = styled(motion.div)`
`;
const Master = ({headerData, footerData, children, location}) => {
	React.useEffect(() => {
		const kontentSmartLink = KontentSmartLink.initialize({
			queryParam: 'preview-mode',
		});
		return () => {
			kontentSmartLink.destroy();
		};
	});
	const data = useStaticQuery(graphql`
		query {
			sitePlugin(name: {eq: "@kentico/gatsby-source-kontent"}) {
				pluginOptions
			}
		}
	`);
	const [menuIsOpen, setMenuisOpen] = React.useState(false);
	React.useEffect(() => {
		if (menuIsOpen == true) {
			document.body.style.overflow = 'hidden';
		}
		return () => (document.body.style.overflow = 'unset');
	}, [menuIsOpen]);
	return (
		<div className="master-root">
			<Helmet
				bodyAttributes={{
					'data-kontent-project-id':
						data.sitePlugin.pluginOptions.projectId,
					'data-kontent-language-codename':
						data.sitePlugin.pluginOptions.languageCodenames[0],
				}}>
				<script
					src="https://www.google.com/recaptcha/api.js"
					async
					defer></script>
				<script type="application/ld+json">
					{`
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							"url": "https://www.redstoneadv.com",
							"name": "Redstone Advisors",
							"description": "Redstone Advisors",
						}
					`}
				</script>
				<script
					src="https://ab3fa17f71e2419bb6efe375779a6318.js.ubembed.com"
					async></script>
				<script
					src="https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"
					type="text/javascript"
					charset="UTF-8"
					data-domain-script="eedfa13c-3126-4cd1-9687-dbae1b36efa6"></script>
				<script>
					{`function OptanonWrapper() {window.dataLayer.push({event: 'OneTrustGroupsUpdated'},console.log("optanonwrapper fired")); }`}
				</script>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossorigin
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				/>
			</Helmet>
			<ThemeWrapper>
				<Header
					data={headerData}
				/>
				<ContentWrapper
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					exit={{opacity: 0}}
					transition={{
						duration: 0.55,
					}}>
					{children}
				</ContentWrapper>
				<Footer data={footerData} location={location} />
			</ThemeWrapper>
		</div>
	);
};

export default Master;

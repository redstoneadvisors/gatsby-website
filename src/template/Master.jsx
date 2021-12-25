import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import KontentSmartLink from "@kentico/kontent-smart-link";
import { Helmet } from "react-helmet";
import ThemeWrapper from "./ThemeWrapper";
import Header from "./Header";
import Footer from "./Footer";

const Master = ({ headerData, footerData, children }) => {
  // console.log(headerData, footerData);
  React.useEffect(() => {
    const kontentSmartLink = KontentSmartLink.initialize({
      queryParam: "preview-mode",
    });
    return () => {
      kontentSmartLink.destroy();
    };
  });
  const data = useStaticQuery(graphql`
    query {
      sitePlugin(name: { eq: "@kentico/gatsby-source-kontent" }) {
        pluginOptions
      }
    }
  `);
  return (
    <div>
      <Helmet
        bodyAttributes={{
          "data-kontent-project-id": data.sitePlugin.pluginOptions.projectId,
          "data-kontent-language-codename":
            data.sitePlugin.pluginOptions.languageCodenames[0],
        }}
      >
        <script type="application/ld+json">
          {`
						{
							"@context": "https://schema.org",
							"@type": "Organization",
							"url": "https://www.redstoneadv.com",
							"name": "Redstone Advisors",
							"description": "Redstone Advisors ",
						}
					`}
        </script>
      </Helmet>
      <ThemeWrapper>
        <Header data={headerData} />
        <div>{children}</div>
        <Footer data={footerData} />
      </ThemeWrapper>
    </div>
  );
};

export default Master;

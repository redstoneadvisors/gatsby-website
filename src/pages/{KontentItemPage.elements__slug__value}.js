import * as React from "react";
import { graphql } from "gatsby";
import Master from "../template/Master";
import PageSections from "../template/PageSections";
const Page = ({ data }) => {
  return (
    <Master headerData={null} footerData={{ data: "replacewithrealdata" }}>
      <h1 style={{ color: "#4c4e56", fontWeight: "100" }}>
        {data.kontentItemPage.elements.title.value}
      </h1>
      {data?.kontentItemPage?.elements?.sections?.value?.map((section, key) => {
        return <PageSections key={key} section={section} />;
      })}
    </Master>
  );
};

export default Page;

export const query = graphql`
  query ($id: String) {
    kontentItemPage(id: { eq: $id }) {
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

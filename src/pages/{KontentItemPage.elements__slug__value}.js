import * as React from "react";
import { graphql } from "gatsby";

const Page = () => {
  return (
    <div>
      <h1>Hey</h1>
    </div>
  );
};

export default Page;

// export const query = graphql`
//   query ($id: String) {
//     kontentItemPage(id: { eq: $id }) {
//       system {
//         id
//         language
//       }
//     }
//   }
// `;

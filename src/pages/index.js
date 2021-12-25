import * as React from "react";
import { graphql } from "gatsby";
import Master from "../template/Master";

const HomePage = () => {
  return (
    <Master
      headerData={kontentItemHomepage}
      footerData={{ data: "replacewithrealdata" }}
    ></Master>
  );
};

export default HomePage;

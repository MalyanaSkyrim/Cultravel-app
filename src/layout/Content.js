import React from "react";
import Layout from "./Layout";
import ContentRouter from "../routes/ContentRouter";

const Content = () => {
  return (
    <Layout>
      <ContentRouter></ContentRouter>
    </Layout>
  );
};

export default Content;

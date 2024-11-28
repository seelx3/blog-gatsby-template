import * as React from "react";
import { PageProps, HeadFC, graphql } from "gatsby";
import { Layout } from "../../components/Layout";
import "github-markdown-css/github-markdown-light.css";

export const pageQuery = graphql`
  query PostPage($id: String) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY/MM/DD")
        title
        description
      }
    }
  }
`;

const PostPage: React.FC<PageProps<Queries.PostPageQuery>> = ({ data }) => {
  return (
    <Layout>
      <div className="bg-white p-5">
        <div className="mb-12">
          <h1 className="text-2xl font-bold">
            {data.markdownRemark?.frontmatter?.title}
          </h1>
          <p>{data.markdownRemark?.frontmatter?.date}</p>
        </div>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark?.html || "",
          }}
          className="markdown-body"
        />
      </div>
    </Layout>
  );
};

export default PostPage;

export const Head: HeadFC<Queries.PostPageQuery> = ({ data }) => (
  <title>{data.markdownRemark?.frontmatter?.title}</title>
);

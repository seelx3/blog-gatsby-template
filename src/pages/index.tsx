import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { FaImage } from "react-icons/fa";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter?.title}>
            <Link to={`posts/${post.fields?.slug}` || ""}>
              <div className="bg-white border border-gray-200 p-4 mb-4">
                <div className="flex">
                  <div className="w-20 min-w-20 h-20 border border-gray-200 mr-4 flex items-center justify-center">
                    {post.frontmatter?.thumbnailUrl ? (
                      <img
                        src={post.frontmatter?.thumbnailUrl}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <FaImage className="text-2xl text-gray-400" />
                    )}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold">
                      {post.frontmatter?.title}
                    </h2>
                    <p>{post.frontmatter?.description}</p>
                    <p>{post.frontmatter?.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC<Queries.IndexPageQuery> = ({ data }) => (
  <title>{data.site?.siteMetadata?.title}</title>
);

export const pageQuery = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "YYYY/MM/DD")
          title
          description
          thumbnailUrl
        }
        fields {
          slug
        }
      }
    }
  }
`;

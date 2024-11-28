import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { graphql, Link } from "gatsby";
import { Layout } from "../components/Layout";
import { FaImage } from "react-icons/fa";

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

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;

  return (
    <Layout>
      <ul>
        {posts.map((post) => (
          <li key={post.frontmatter?.title}>
            <BlogCard
              title={post.frontmatter?.title || ""}
              description={post.frontmatter?.description || ""}
              thumbnailUrl={post.frontmatter?.thumbnailUrl || ""}
              date={post.frontmatter?.date || ""}
              slug={post.fields?.slug || ""}
            />
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

type BlogCardProps = {
  title: string;
  description: string;
  thumbnailUrl: string;
  date: string;
  slug: string;
};

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  thumbnailUrl,
  date,
  slug,
}) => (
  <Link to={`posts/${slug}`}>
    <div className="bg-white border border-gray-200 p-4 mb-4">
      <div className="flex">
        <div className="w-20 min-w-20 h-20 border border-gray-200 mr-4 flex items-center justify-center">
          {thumbnailUrl ? (
            <img
              src={thumbnailUrl}
              className="w-full h-full object-cover"
              alt="thumbnail"
            />
          ) : (
            <FaImage className="text-2xl text-gray-400" />
          )}
        </div>
        <div>
          <h2 className="text-xl font-bold">{title}</h2>
          <p>{description}</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  </Link>
);

import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { FaGithub } from "react-icons/fa";

type LayoutProps = {
  children: React.ReactNode;
};

type LayoutQuery = {
  site: {
    siteMetadata: {
      author: string;
      title: string;
      githubUrl: string;
    };
  };
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery<LayoutQuery>(graphql`
    query Layout {
      site {
        siteMetadata {
          author
          title
          githubUrl
        }
      }
    }
  `);

  return (
    <div>
      <header className="border-b p-4">
        <nav>
          <Link to="/" className="font-bold">
            {data.site.siteMetadata.title}
          </Link>
          <ul className="float-right">
            <li>
              <a href={data.site.siteMetadata.githubUrl}>
                <FaGithub className="inline-block ml-2 text-xl" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="bg-gray-50">
        <div className="max-w-3xl mx-auto p-4">{children}</div>
      </main>
      <footer className="border-t p-4 text-center">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} {data.site.siteMetadata.author}
        </p>
      </footer>
    </div>
  );
};

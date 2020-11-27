import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

export default function Home({ data }) {
  return(
    <Layout>
      <SEO title="home" />
      <h1>My Wordpress Blog</h1>
      <h4>Posts</h4>
      {data.allWpPost.nodes.map((node) => (
        <div key={node.slug}>
          <p>
            <Link to={node.slug}>
              {node.title}
            </Link>
          </p>
          <div dangerouslySetInnerHTML={{__html: node.excerpt}}/>
        </div>
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allWpPost {
      nodes {
        title
        excerpt
        slug
      }
    }
  }
`

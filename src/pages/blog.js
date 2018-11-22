import React from 'react'
import Container from "../components/container";
import styles from './blog.module.css'

import { Link, graphql } from 'gatsby';

const IndexPage = ({ data }) => (
  <Container>
    <h1>These blog posts are fetched from WordPress. Isn't is cool?</h1>
    <h4>{data.allWordpressPost.totalCount} Posts</h4>
        {data.allWordpressPost.edges.map(({ node }) => (
      <div key={node.id}>
        <Link
            to={`/blog/${node.slug}`}
            className={styles.post_link}
        >
          <h3
            className={styles.post_title}
          >
            {node.title}{' '}
            <span
                className={styles.post_date}
            >
              — {node.date}
            </span>
          </h3>
                <div dangerouslySetInnerHTML={{ __html:node.excerpt}}  />
        </Link>
      </div>
    ))}
  </Container>
)

export const PageQuery = graphql`
         query GetAllBlogPosts {
           allWordpressPost {
             totalCount
             edges {
               node {
                 id
                 title
                 excerpt
                 date(fromNow: true)
                 slug
               }
             }
           }
         }
       `

export default IndexPage;

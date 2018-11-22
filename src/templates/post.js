import React from "react"
import Container from '../components/container'
import { graphql } from "gatsby";

export default ({ data }) => {
    const { wordpressPost: post } = data
    return (
        <Container>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: post.title }} />
                <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
        </Container>
    );
}

export const pageQuery = graphql`
         query getWordPressPost($id: String!) {
           wordpressPost(id: { eq: $id }) {
             id
             title
             content
             excerpt
             wordpress_id
             slug
             status
             type
             date(fromNow: true)
             author {
               wordpress_id
               name
               slug
             }
             template
           }
         }
       `

import React from "react"
import Container from '../components/container'
import { graphql } from "gatsby";

export default ({data}) => {
    const { wordpressPage: page } = data;
    return (
        <Container>
            <div>
                <h1 dangerouslySetInnerHTML={{ __html: page.title }} />
                <div dangerouslySetInnerHTML={{ __html: page.content}} />
            </div>
        </Container>
    );
}

export const pageQuery = graphql`
         query getWordPressPage($id: String!) {
           wordpressPage(id: { eq: $id }) {
             id
             title
             content
             excerpt
             wordpress_id
             slug
             status
             type
             author {
               wordpress_id
               name
               slug
             }
             template
           }
         }
       `

import React from 'react'

//import Layout from '../components/layout'
import Container from "../components/container";

const IndexPage = () => (
  <Container>
    <h1>
      Hi! I'm building a fake Gatsby site with WordPress as a headless CMS!
    </h1>
    <p>
      What do I like to do? Lots of course but definitely enjoy building
      websites.
    </p>
    <h3>What I learn't till now? </h3> 
    <ul>
        <li>Getting all pages from WordPress</li>
        <li>Getting a single page from WordPress</li>
        <li>Getting menu created in WordPress <br/><small>(This website is using primary menu set in WordPress)</small> </li>
        <li>Getting all posts from WordPress</li>
        <li>Getting a single post from WordPress</li>
    </ul>    
  </Container>
)

export default IndexPage

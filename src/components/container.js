import React from "react"
import containerStyles from "./container.module.css";
import { StaticQuery, Link } from 'gatsby'

const ListLink = props => (
  <li className={containerStyles.li}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div className={containerStyles.container}>
    <header className={containerStyles.header}>
      <Link to="/" className={containerStyles.link}>
        <h3 className={containerStyles.brand}>Wordsby</h3>
      </Link>
      <StaticQuery
        query={graphql`
          query GetMenuItems {
            allWordpressWpApiMenusMenusItems {
              edges {
                node {
                  slug
                  items {
                    wordpress_id
                    title
                    object_slug
                  }
                }
              }
            }
          }
        `}
        render={data => {
          const primaryMenuItems =
            data.allWordpressWpApiMenusMenusItems.edges[0].node.items
          console.log(primaryMenuItems)
          return <ul className={containerStyles.ul}>
              <ListLink to="/">Home</ListLink>
              <ListLink to="/blog">Blog</ListLink>
              { primaryMenuItems.map(item => (
                <ListLink
                  to={item.object_slug}
                  key={item.wordpress_id}
                >
                  {item.title}
                </ListLink>
              ))}
            </ul>
        }}
      />
    </header>
    {children}
  </div>
)
import React from 'react'
import { graphql } from 'gatsby'

export default ({ data }) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark
    
    return (
        <div
            className="blog-post-container"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    )
}

export const query = graphql`
    query($path: String!) {
        markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
                title
            }
        }
    }
`
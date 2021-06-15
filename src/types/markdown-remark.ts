export type MarkdownRemark = {
    frontmatter: {
        slug: string
        stack: string
        title: string
        thumb: {
            childImageSharp: {
                fluid: {
                    GatsbyImageSharpFluid: string
                }
            }
        }
    }
    id: string
}

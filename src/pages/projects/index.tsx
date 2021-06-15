import { graphql, Link, PageProps } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projectstyle } from "../../styles/projects.module.css"
import Img from "gatsby-image"
import { MarkdownRemark } from "../../types/markdown-remark"

type GraphQLResult = {
  allMarkdownRemark: {
    nodes: MarkdownRemark
  }[],
}

const Projects: React.FC<PageProps<GraphQLResult>> = ({ data }) => {
  console.log(data, "anis")
  const projects = data.allMarkdownRemark.nodes


  return (
    <Layout>
      <div className={portfolio}>
        <h2>Portfolio</h2>
        <h3>Projects & Websites I've Created</h3>
        <div className={projectstyle}>
          {projects.map((project: any) => (
            <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
              <div>
                <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default Projects

// export page query
export const query = graphql`
query ProjectsPage {
  allMarkdownRemark(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        slug
        stack
        title
        thumb {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`

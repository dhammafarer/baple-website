import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import {
  DivisionName,
  WelcomeSection,
  CategoriesSection,
  ProductsSection,
} from "../types"
import Welcome from "../components/sections/Welcome"
import Categories from "../components/sections/Categories"
import Products from "../components/sections/Products"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"
import { Container } from "@material-ui/core"
import More from "../components/sections/More"

interface Props {
  data: {
    javascriptFrontmatter: {
      fields: {
        domain: DivisionName
      }
      frontmatter: {
        title: string
        sections: {
          welcome: WelcomeSection
          categories: CategoriesSection
          products: ProductsSection
        }
      }
    }
  }
}

const DivisionIndexTemplate: React.FC<Props> = ({ data }) => {
  const {
    welcome,
    categories,
    products,
  } = data.javascriptFrontmatter.frontmatter.sections
  const domain = data.javascriptFrontmatter.fields.domain
  return (
    <Layout domain={domain}>
      <SEO title={data.javascriptFrontmatter.frontmatter.title} />
      {welcome && (
        <Welcome
          heading={welcome.heading}
          subheading={welcome.subheading}
          domain={domain}
          image={welcome.image && welcome.image.childImageSharp.fluid}
          quotes={welcome.quotes}
        />
      )}
      {categories && (
        <Hero heading={categories.heading}>
          <Container>
            <Categories
              heading={categories.heading}
              subheading={categories.subheading}
              image={categories.image}
              categoryLinks={categories.categoryLinks}
            />
          </Container>
        </Hero>
      )}
      {products && (
        <Container>
          <Products products={products.productList} />
        </Container>
      )}
      <More domain={domain} />
    </Layout>
  )
}

export default DivisionIndexTemplate

export const query = graphql`
  query($slug: String!) {
    javascriptFrontmatter(fields: { slug: { eq: $slug } }) {
      fields {
        domain
      }
      frontmatter {
        title
        sections {
          welcome {
            heading
            subheading
            quotes {
              quote
              author
            }
            image {
              childImageSharp {
                fluid(maxWidth: 1920, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          products {
            productList {
              heading
              subheading
              body
              link {
                to
                label
              }
              image {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          categories {
            heading
            categoryLinks {
              label
              image {
                childImageSharp {
                  fluid(quality: 100, maxWidth: 250) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              to
            }
          }
        }
      }
    }
  }
`

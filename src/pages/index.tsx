import React from "react"
import { Link as GatsbyLink } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import { Button, Link } from "@material-ui/core"

const IndexPage: React.FC<{}> = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <Button color="primary">Hello</Button>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link component={GatsbyLink} to="/page2/">
      Go to page 2
    </Link>
  </Layout>
)

export default IndexPage

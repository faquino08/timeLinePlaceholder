import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Jumbo from "../components/jumbotron/jumbo"
import TimeLine from "../components/timeline/timeline"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Jumbo 
      title="What is this?" 
      message="This is a little project I was inspired to start, while thinking
        about your card and I think this would be a great way for us to document
        and plan our time together. Give me a couple of days to complete this 
        project; it is almost done."/>
  </Layout>
)



export default IndexPage

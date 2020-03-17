import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from "gatsby"

const getStory = graphql `
query {
storyImg: allFile(filter: {name: {in: ["story-1", "story-2"]}}) {
    edges {
      node {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_tracedSVG
            
          }
        }
      }
    }
  }
}
`

const Story =()=>{

    const data = useStaticQuery(getStory)
    const pictures = data.storyImg.edges
    return(
        <>
        <div >
            <Img fluid = {pictures[0].node.childImageSharp.fluid} />
            <Img fluid = {pictures[1].node.childImageSharp.fluid} />            
        </div>

        <div >
            <h3 >Happy Customers</h3>
            <h2 >&ldquo;The best decision of our lives&rdquo;</h2>
            <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur distinctio necessitatibus pariatur voluptatibus. Quidem consequatur harum volupta!
            </p>
            <butto>Find your own home</butto>
        </div>
        </>
    )
}
    
export default Story
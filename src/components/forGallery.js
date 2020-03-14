import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const getGallery = graphql `
query {
galleryImg: allFile(sort: {fields: name}, filter: {relativeDirectory: {eq: "gallery"}}) {
      edges {
        node {
          childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

const ForGallery = ()=>{

    const data = useStaticQuery(getGallery)
    const galImages = data.galleryImg.edges

    return(
        <div>
            <h3>Gallery</h3> 
          {galImages.map (
              ({node}, i) => (
                <Img key={i} fluid = {node.childImageSharp.fluid}/>
              )
          )}
            
        </div>
       

    )
}

export default ForGallery
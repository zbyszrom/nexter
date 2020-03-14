import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import Estate from './estate'

const getEstates = graphql `
query {
    homes: allStrapiEstate {
      edges {
        node {
          Area
          Location
          Name
          Price
          Rooms
          Photo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          id
        }
      }
    }
  }`


const ForEstates =()=>{
    const response = useStaticQuery(getEstates)
    const estates = response.homes.edges
    return(
        <div>
            <h3>Homes</h3>
            <div>
                {estates.map(
                    ({node}) => {
                        return <Estate key={node.id} estate = {node}/>
                    }
                )}
            </div>
        </div>
        
    )
}
export default ForEstates
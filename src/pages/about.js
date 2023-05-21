import * as React from 'react';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Layout from '../components/layout.js';

export default function AboutPage({ data }) {
    const img = getImage(data.file);
    return (
        <Layout
            title="about this site"
            description="more info"
            >
        <GatsbyImage
            image={img}
            alt="cocktail"
        />
        <h1>About Page</h1>
        </Layout>
    )
}

// query is a keyword that gatsby uses at build time to pull the data
export const query = graphql`
query cocktailQuery {
  file(name: {eq: "cocktail"}) {
    childImageSharp {
      gatsbyImageData
    }
  }
}
`;
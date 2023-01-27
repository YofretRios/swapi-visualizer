import { graphql } from "gatsby";
import React from "react";

const Planet = ({ data }) => {
  const { planets } = data;

  return (
    <div>
      <h1>{planets.name}</h1>
      <pre>{JSON.stringify(planets, null, 3)}</pre>
    </div>
  );
};

export default Planet;

export const query = graphql`
  query getPLanet($slug: String) {
    planets(slug: { eq: $slug }) {
      slug
      orbital_period
      population
      residents
      rotation_period
      surface_water
      terrain
      url
      films
      diameter
      name
    }
  }
`;

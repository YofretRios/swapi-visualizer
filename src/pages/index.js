import * as React from "react";
import { graphql, Link } from "gatsby";
import { heading, pageStyles } from "../styles/home.module.scss";

const IndexPage = ({ data }) => {
  const { allPlanets: { nodes }} = data;
  console.log(nodes);

  return (
    <main className={pageStyles}>
      <h1 className={heading}>
        SWAPI Visualizer
        <br />
      </h1>
      <ul>
        {nodes.map((planet) => (
          <li key={planet.id}>
            <span>
              <Link to={`/planet/${[planet.slug]}`}>{planet.name}</Link>
            </span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const query = graphql`
  query MyQuery {
    allPlanets {
      nodes {
        id
        name
        slug
      }
    }
  }
`;

import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MAIN = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
  height: ${props => `calc(100vh - ${props.theme.sizes.headerHeight})`};
  background: ${props => props.theme.colors.primary20};
`;

const Home: React.FC = () => {
  return (
    <MAIN>
      <div>
        <Link to="/create">
          Create memes
          <span role="img" aria-label="wrench">
            🛠
          </span>
        </Link>
        <Link to="/yours">
          Your memes
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Link>
      </div>
    </MAIN>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main>
      <div>
        <Link to="/create">
          Create memes
          <span role="img" aria-label="wrench">
            🛠
          </span>
        </Link>
        <Link to="/yours">
          Your memes ❤
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </Link>
      </div>
    </main>
  );
};

export default Home;

import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <main className="container mx-auto text-center">
      <div className="text-base pt-4">
        <Link className="" to="/create">
          Create memes
          <span role="img" aria-label="wrench">
            🛠
          </span>
        </Link>
        <Link className="" to="/yours">
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

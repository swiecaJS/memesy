import React from "react";
import Create from "./Create";
import Home from "./Home";
import Yours from "./Yours";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl">Memesy</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create">Create</Link>
          </li>
          <li>
            <Link to="/yours">Your Memes</Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={Home} exact />
      <Route path="/create" component={Create} />
      <Route path="/yours" component={Yours} />
    </BrowserRouter>
  );
};

export default Root;

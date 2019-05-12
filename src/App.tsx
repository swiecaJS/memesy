import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

const Index: React.FC = () => {
  return (
    <main className="container mx-auto text-center">
      <div className="text-base pt-4">
        <Link className="" to="/create">
          Create memes 🛠
        </Link>
        <Link className="" to="/yours">
          Your memes ❤️
        </Link>
      </div>
    </main>
  );
};
const Create: React.FC = () => {
  return (
    <main>
      <h1>Create Memes </h1>
    </main>
  );
};
const Yours: React.FC = () => {
  return (
    <main>
      <h1>Yours memes</h1>
    </main>
  );
};

const Root: React.FC = () => {
  return (
    <BrowserRouter>
      <header className="bg-purple-darker m-6 p-6 rounded shadow-lg">
        <h1 className="text-white text-3xl">Memesy</h1>
      </header>
      <nav>
        <ul>
          <li>
            <Link
              className="bg-purple-darker text-white p-3 rounded no-underline hover:bg-purple-dark ml-2"
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className="bg-purple-darker text-white p-3 rounded no-underline hover:bg-purple-dark ml-2"
              to="/create"
            >
              Create
            </Link>
          </li>
        </ul>
      </nav>
      <Route path="/" component={Index} exact />
      <Route path="/create" component={Create} />
      <Route path="/yours" component={Yours} />
    </BrowserRouter>
  );
};

const App: React.FC = () => {
  return <Root />;
};

export default App;

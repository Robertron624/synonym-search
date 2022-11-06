import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SynonymCard } from "./components/SynonymCard/SynonymCard";
import Axios from "axios";
import "./App.css";
import { Footer } from "./components/Footer/Footer";

const BASE_URL = "https://api.datamuse.com";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [returnedSynonyms, setReturnedSynonyms] = useState([]);

  const makeAPICall = (e) => {
    e.preventDefault()
    Axios.get(`${BASE_URL}/words?rel_syn=${searchTerm}`)
      .then((response) => setReturnedSynonyms(response.data))
      .catch((e) => console.log("Error: ", e));

    console.log(returnedSynonyms);
  };

  return (
    <>
      <Header />
      <div className="container-fluid d-flex flex-column justify-content-center align-items-center main_content">
        <div className="greetings">
          <h1 className="mb-5">Synonym Searcher App !</h1>
          <p className="mb-5">
            With this app you will get a list of synoyms according to what you
            type down
          </p>
        </div>
        <form className="search__area d-flex" onSubmit={makeAPICall}>
          <input
            onChange={(e) => setSearchTerm(e.target.value)}
            type="text"
            name=""
            id=""
          />
          <button
            
            className="btn btn-primary"
            type="submit"
          >
            Search
          </button>
        </form>
        <div className="results-area">
          {returnedSynonyms ? (
            <ul>
              {returnedSynonyms.map((synonym, index) => {
                return <SynonymCard key={index} props={{ synonym }} />;
              })}
            </ul>
          ) : null}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;

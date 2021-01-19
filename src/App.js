import React, { useState } from "react";
import Counters from "./components/Counters";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMinus, faPlus, faStopwatch);

function App() {
  // Je crée mes états:
  const [counters, setCounters] = useState([0]);
  // console.log(counters);

  return (
    <>
      <header>
        <FontAwesomeIcon icon="stopwatch" className="stopwatch" />
        <h1>React Counter v2</h1>
      </header>
      <div className="wrapper">
        {counters.length < 3 && (
          <button
            className="add-button"
            onClick={() => {
              if (counters.length < 3) {
                // Quand je clique un nouveau compteur apparait
                const newCounters = [...counters]; // copie du tableau d'origine
                newCounters.push(0); // j'ajoute un nouvel état dans mon tableau
                setCounters(newCounters); // mise à jour du state avec la copie
              }
            }}
          >
            Add counter
          </button>
        )}

        <div className="test">
          {counters.map((counter, index) => {
            return (
              <Counters
                key={index}
                counters={counters}
                setCounters={setCounters}
                counter={counter}
                index={index}
              />
            );
          })}
        </div>
      </div>
      <footer>
        <p>
          Made with <span>React</span> @ <span>Le Reacteur</span> by{" "}
          <span>Pti2mike</span>
        </p>
      </footer>
    </>
  );
}
export default App;

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Counters = ({ counters, setCounters, index, counter }) => {
  return (
    <div>
      <div className="counter-wrapper">
        {counter > 0 && (
          <FontAwesomeIcon
            className="minus"
            icon="minus"
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]--;
              setCounters(newCounters); // Retire 1 au compteur
            }}
          />
        )}

        <div className="counter">{counter}</div>
        {counter < 10 && (
          <FontAwesomeIcon
            className="plus"
            icon="plus"
            onClick={() => {
              const newCounters = [...counters];
              newCounters[index]++;
              setCounters(newCounters); // Ajoute 1 au compteur
            }}
          />
        )}
      </div>

      <div>
        <button
          className="reset-button"
          onClick={() => {
            const newCounters = [...counters];
            newCounters[index] = 0;
            setCounters(newCounters); // Réinitialise mon compteur
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counters;

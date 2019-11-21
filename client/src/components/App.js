import React, { useState, useEffect } from "react";
//import { unstable_renderSubtreeIntoContainer } from "react-dom";
import personService from "../services/person";
import PersonList from "./personList";
import HirePersonFrom from "./HirePersonForm";

const App = props => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    personService.getPersons().then(setPersons);
  }, []);

  const firePerson = id => {
    setPersons(persons.filter(p => p.id !== id));
  };

  const hirePerson = person => {
    setPersons(persons.concat([person]));
  };

  const isGood = person => person.age < 30;
  const goodPersons = persons.filter(isGood);
  const badPersons = persons.filter(p => !isGood(p));

  return (
    <div>
      <h1>Hello React Training 2019</h1>

      <HirePersonFrom hirePerson={hirePerson} />

      <h2>Pahikset</h2>
      <PersonList firePerson={firePerson} persons={badPersons} showMetadata />

      <h2>Hyvikset</h2>
      <PersonList
        firePerson={firePerson}
        persons={goodPersons}
        showMetadata={false}
      />
    </div>
  );
};

export default App;

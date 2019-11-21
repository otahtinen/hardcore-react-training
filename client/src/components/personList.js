import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 5
    }
  }
};

const children = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const PersonList = props => {
  const { persons, showMetadata, ...rest } = props;
  const averageAge = persons.reduce((a, p) => a + p.age, 0) / persons.length;

  return (
    <div>
      {showMetadata && <p>Keski-ikä: {averageAge.toFixed(2)}</p>}
      {persons.map(person => (
        <Person {...rest} key={person.id} person={person} />
      ))}
    </div>
  );
};

PersonList.propTypes = {
  persons: PropTypes.array.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;

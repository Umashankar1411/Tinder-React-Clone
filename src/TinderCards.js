import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./TinderCards.css";
import database from "./firebase";
function TinderCards() {
  const [people, setPeople] = useState([]);
  //BAD
  //const people = [];
  //people.push('uma','shankar')

  //GOOD (Push to array in ReactJs)
  //setPeople([...people, "uma","shankar"])

  //Piece of code which runs based on condition
  useEffect(() => {
    //this is where code runs..

    //this will run once when the component loads, and never again

    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      //this is the cleanup..
      unsubscribe();
    };
  }, [people]);

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;

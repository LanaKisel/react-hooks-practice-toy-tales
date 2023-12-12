import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onDeleteToy, onChangeLikes }) {
  const newToys = toys.map((toy) => <ToyCard key={toy.id} toy={toy} onDeleteToy={onDeleteToy} onChangeLikes={onChangeLikes} />)
  return (
    <div id="toy-collection">{newToys}</div>
  );
}

export default ToyContainer;

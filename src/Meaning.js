import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>Definition: </strong>
            {definition.definition}
            <br />
            <strong>
              <em>Example: </em>
            </strong>
            <em>
              <Example example={definition.example} />
            </em>
          </div>
        );
      })}

      <p>
        <strong>Synonyms: </strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}

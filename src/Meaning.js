import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              <span>
                <strong>Definition: </strong>
              </span>
              {definition.definition}
            </div>
            {definition.example && (
              <div className="example">
                <em>Example: </em>
                <span className="example">
                  <Example example={definition.example} />
                </span>
              </div>
            )}
          </div>
        );
      })}

      {props.meaning.synonyms.length > 0 && (
        <div className="synonyms">
          <span>Synonyms:</span>
          <Synonyms synonyms={props.meaning.synonyms} />
        </div>
      )}
    </div>
  );
}

import React, {useState} from 'react';
import _ from 'lodash'

import ButtonEnhanced from '@naschpitz/button-enhanced';

const App = () => {
  const [ results, setResults ] = useState([]);

  function onDone(result) {
    const newResults = _.clone(results);
    newResults.push(result);

    setResults(newResults);
  }

  return (
    <div>
      <ButtonEnhanced buttonOptions={{id: "btnDoThis",
                                      regularText: "Do This",
                                      className: "btn btn-sm btn-danger",
                                      type: "button"
                                    }}
                      confirmationOptions={{title: "Confirm year removal",
                                            text: <span>Do you really want to do this?</span>,
                                            confirmButtonText: "Do this",
                                            confirmButtonActionText: "Doing this...",
                                            cancelButtonText: "Cancel",
                                            onDone: onDone
                                          }}
      />

      <h4>Results</h4>
      {results.length}
      {results.map((result) => (<div>{result.toString()}</div>))}
    </div>
  );
}

export default App

# @naschpitz/button-enhanced

> A button using React.js and Bootstrap 4 that will display a click confirmation pop-up.

[![NPM](https://img.shields.io/npm/v/@naschpitz/button-enhanced.svg)](https://www.npmjs.com/package/@naschpitz/button-enhanced) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @naschpitz/button-enhanced
```

## Usage

```jsx
import React, {useState} from 'react';
import _ from 'lodash'

import { ButtonEnhanced } from '@naschpitz/button-enhanced';
import '@naschpitz/button-enhanced/dist/index.css';

const App = () => {
    const [ results, setResults ] = useState([]);
    const [ isAction, setIsAction ] = useState(false);

    function onDone(result) {
        if (result) {
            setIsAction(true);

            setTimeout(() => {
                setIsAction(false);
            }, 2000);
        }

        const newResults = _.clone(results);
        newResults.push(result);

        setResults(newResults);
    }

    return (
        <div>
            <ButtonEnhanced buttonOptions={{id: "btnDoThis",
                                            regularText: "Do This",
                                            actionText: "Doing this...",
                                            isAction: isAction,
                                            className: "btn btn-sm btn-danger",
                                            type: "button"
                                          }}
                            confirmationOptions={{title: "Confirm that",
                                                  text: <span>Do you really want to do this?</span>,
                                                  confirmButtonText: "Do that",
                                                  confirmButtonActionText: "Doing that...",
                                                  cancelButtonText: "Cancel",
                                                  cancelButtonActionText: "Cancelling...",
                                                  onDone: onDone
                                                }}
            />

            <h6>Results</h6>
            {results.length}
            {results.map((result) => (<div>{result.toString()}</div>))}
        </div>
    );
}

export default App
```

## License

MIT © [naschpitz](https://github.com/naschpitz)

import React, {useState} from 'react'

/*
-RFCE reactFunctionalExportComponent shourtcut to create function.
-import useState from react.
-array destructure of count and setCount variables using useState. 
*/
function HookCounter() {
    const [count, setCount] = useState(0)



    return (
        <div>
          <button onClick={() => setCount(count + 1)}> Count {count} </button>
        </div>
    )
}



export default HookCounter

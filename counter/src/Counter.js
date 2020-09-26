import React, { useState } from 'react'

const Counter = props => {
  const [myCount, setMyCount] = useState(props.countFrom)
  // const array = [0, () => {}]
  // const [name, setName] = useState('Elias')
  return (
    <div>
      <button onClick={() => setMyCount(myCount + 1)}> {myCount} </button>{' '}
    </div>
  )
}

export default Counter

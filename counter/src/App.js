import React from 'react'
import Counter from './Counter'
import CounterClass from './CounterClassBased'
import './App.css'

// Functional type component
const MyName = props => {
  console.log(props)

  return <div> My name is {props.name} </div>
}

class MySecondName extends React.Component {
  render () {
    return <div> My Second Name is {this.props.name} </div>
  }
}

const names = ['Elias']

function App () {
  return (
    <div className='App'>
      {names.map(name => (
        <MyName key={name} name={name} />
      ))}
      <MySecondName name='Weldemichael' />
      <Counter countFrom={0} /> <CounterClass countFrom={0} />
    </div>
  )
}

export default App

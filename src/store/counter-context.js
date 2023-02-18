import React from 'react'

const CounterContext = React.createContext({
	counter: 0,
	incrementCounter: () => {},
})

export default CounterContext

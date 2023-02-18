import { useContext } from 'react'
import CounterContext from './store/counter-context'

function App() {
	const counterCtx = useContext(CounterContext)

	const incrementButtonHandler = event => {
		event.preventDefault()
		counterCtx.incrementCounter()
	}

	return (
		<div className='App'>
			<p>{counterCtx.counter}</p>
			<button onClick={incrementButtonHandler}>Add</button>
		</div>
	)
}

export default App

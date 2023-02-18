import { useReducer } from 'react'
import CounterContext from './counter-context'

const defaultCounterState = {
	counter: 0,
}

const counterReducer = (state, action) => {
	if (action.type === 'INCREMENT') {
		return {
			counter: state.counter + 1,
		}
	}
}

const CounterProvider = props => {
	const [counterState, dispatchCounterAction] = useReducer(counterReducer, defaultCounterState)

	const incrementHandler = () => {
		dispatchCounterAction({ type: 'INCREMENT' })
	}

	const counterContext = {
		counter: counterState.counter,
		incrementCounter: incrementHandler,
	}

	return <CounterContext.Provider value={counterContext}>{props.children}</CounterContext.Provider>
}
export default CounterProvider

import "./App.css";
import { useState } from "react";
import { Container } from "./components/Container";
import { Button } from "./components/Button";
import CounterDisplay from "./components/CounterDisplay";

function App() {
	const [count, setCount] = useState(0);

	function increaseCount() {
		let c = count;
		c = c + 1;
		setCount(c);
	}

	function decreaseCount() {
		let d = count;
		d = d - 1;
		setCount(d);
	}

	return (
		<Container>
			<CounterDisplay count={count} />
			<Button text={"Increase"} onClick={increaseCount} />
			<Button text={"Decrease"} onClick={decreaseCount} />
		</Container>
	);
}

export default App;

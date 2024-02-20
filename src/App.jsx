import { useState } from "react";

import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Results from "./components/Results";

function App() {
	const [userInput, setUserInput] = useState({
		initialInvestment: 10000,
		annualInvestment: 1200,
		expectedReturn: 5,
		duration: 10,
	});

	const inputIsValid = userInput.duration >= 1;

	const handleChange = (inputIdentifier, newValue) => {
		setUserInput((prevVal) => {
			return {
				...prevVal,
				[inputIdentifier]: +newValue,
			};
		});
	};

	return (
		<>
			<Header />;
			<UserInput onChange={handleChange} userInput={userInput} />
			{!inputIsValid && <p className="center">Duration should be greater than 0</p>}
			{inputIsValid && <Results userInput={userInput} />}
		</>
	);
}

export default App;

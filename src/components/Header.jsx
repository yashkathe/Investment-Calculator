import React from "react";

import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
	return (
		<div id="header">
			<img src={logo} alt='header' />
			<h1>Investment Calculator</h1>
			<p>Easiest way to calculate your investments</p>
		</div>
	);
};

export default Header;

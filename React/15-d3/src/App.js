import { useEffect, useRef } from "react";
import { select } from "d3";
import "./App.css";

function App() {
	const data = [25, 30, 45, 60, 20];

	const svgRef = useRef();

	useEffect(() => {
		const svg = select(svgRef.current);

		svg.selectAll("circle")
			.data(data)
			.join(
				(enter) => enter.append("circle").attr("class", "new"),
				(update) => update.attr("class", "updated"),
				(exit) => exit.remove()
			).attr("r", value => );
	}, [data]);

	return (
		<div className="App">
			<svg ref={svgRef}></svg>
		</div>
	);
}

export default App;

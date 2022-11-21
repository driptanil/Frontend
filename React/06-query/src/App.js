import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// `npm install react-router-dom`
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";

import { Navbar } from "./Navbar";

// when using `useContent()` strict mode was disabled
// a better alternative is using react-query
// npm install @tanstack/react-query

function App() {
	// react-query automatically refetch data, when we switch tabs
	const client = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
				// disabling refetch on window focus
			},
		},
	});

	return (
		<div className="App">
			<QueryClientProvider client={client}>
				<Router>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/contact" element={<Contact />} />
						<Route
							path="*"
							element={<h1>Error 404: (page not found)</h1>}
						/>
					</Routes>
				</Router>
			</QueryClientProvider>
		</div>
	);
}

export default App;

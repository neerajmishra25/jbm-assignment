import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import HomeScreen from "./components/Screens/HomeScreen";
import ProductScreen from "./components/Screens/ProductScreen";
import LoginScreen from "./components/Screens/LoginScreen";
import RegisterScreen from "./components/Screens/RegisterScreen";
// import ProfileScreen from "./components/Screens/ProfileScreen";

import ProductListScreen from "./components/Screens/ProductListScreen";
import ProductEditScreen from "./components/Screens/ProductEditScreen";

const App = () => {
	return (
		<Router>
			<Header />
			<main className="py-3">
				<Container>
					<Route
						path="/admin/productlist"
						exact
						component={ProductListScreen}
					/>
					<Route
						path="/admin/productlist/:pageNumber"
						exact
						component={ProductListScreen}
					/>
					<Route path="/admin/product/:id/edit" component={ProductEditScreen} />
					<Route path="/register" component={RegisterScreen} />
					<Route path="/login" component={LoginScreen} />
					{/* <Route path="/profile" component={ProfileScreen} /> */}
					<Route path="/product/:id" component={ProductScreen} />

					<Route path="/search/:keyword" exact component={HomeScreen} />
					<Route path="/page/:pageNumber" component={HomeScreen} />
					<Route
						path="/search/:keyword/page/:pageNumber"
						component={HomeScreen}
					/>
					<Route path="/" exact component={HomeScreen} />
				</Container>
			</main>
		</Router>
	);
};

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPageFC from "../pages/login/Login";
import Home from "../pages/home/Home";

const RoutesContainer: React.FC = () => {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<LoginPageFC />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default RoutesContainer;
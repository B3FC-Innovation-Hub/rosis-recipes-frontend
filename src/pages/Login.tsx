import Button from "../components/Button";
import "./Login.css";
import background from "../assets/background-spheres.png";

const Login: React.FC = () => {
	return (
		<div className="container">
			<img
				src={background}
				alt="A background with circles"
				className="image-background"
			/>
			<header className="header">
				<strong>Rosie's</strong> Recipes
			</header>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod
				tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrum exercitationem ullam corporis suscipit Excepteur
				sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt
				mollit anim id est laborum.
			</p>
			<Button />
		</div>
	);
};

export default Login;

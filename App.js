import { useFonts } from "expo-font";
import Routes from "./routes.js";

export default function App() {
	const [fontsLoaded] = useFonts({
		'Poppins': require('./assets/fonts/Poppins.ttf'),
		'Poppins thin': require('./assets/fonts/Poppins_thin.ttf')
	});

	return (
		<Routes></Routes>
	);
}
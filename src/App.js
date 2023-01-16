import { Tooltip } from "react-tooltip";
import { ThemeProvider } from "styled-components";
import "./App.css";
import { AppContainer, GlobalStyle } from "./App.styles";
import Homepage from "./pages/Homepage/Homepage.component";
import { theme } from "./utils/theme";

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<GlobalStyle whiteColor />
			<AppContainer>
				<Homepage />
			</AppContainer>
		</ThemeProvider>
	);
};

export default App;

import "@app/styles/global.css";
import App from "@app/index.tsx";
import store from "@app/providers/store";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById(`root`)!).render(
	<StrictMode>
		<BrowserRouter>
			<Provider store={ store }>
				<App />
			</Provider>
		</BrowserRouter>
	</StrictMode>
)

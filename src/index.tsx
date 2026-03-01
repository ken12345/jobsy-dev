import "bootstrap-icons/font/bootstrap-icons.css";
import "@app/styles/global.css";
import App from "@app/index.tsx";
import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById(`root`)!).render(
	<StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</StrictMode>
)

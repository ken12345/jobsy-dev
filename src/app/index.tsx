import Router from "./providers/router";
import { observer } from "mobx-react-lite";
import type { JSX } from "react";

const App = observer((): JSX.Element => {
	return (
		<Router />
	)
});

export default App;
import { NavBar } from "./components/NavBar";
import { CartWidget } from "./components/CartWidget";
import { ItemListContainer } from "./components/ItemListContainer";
function app () {
    return <NavBar /><ItemListContainer greeting={"Hello"}/>;
}

export default app;
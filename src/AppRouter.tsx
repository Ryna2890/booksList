import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import {CurrentBook} from "./components/CurrentBook/CurrentBook";
import {BooksList} from "./components/BooksList/BooksList";

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <BooksList/>
            },
            {
                path: "/book/:id",
                element: <CurrentBook/>
            },
        ],
    },
]);

export default AppRouter
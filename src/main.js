import React from "react";
import { ReactDOM } from "react-dom/client";
import App from "./App";
import './index.css';
import { DataProvider } from "./context/DataContext";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DataProvider>
            <App />
        </DataProvider>
    </React.StrictMode>
)

//NO VALE PARA NADA EN ESTE PROYECTO, o POR LO MENOS NO SE COMO USARLO PORQUE EN EL VIDEO LO PONE PERO CREO QUE NO LO USA DEL TODO
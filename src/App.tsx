import React from 'react';

import Header from "./primitives/Header";
import Orders from "./components/Orders";

import './styles/App.css';

export const App = () => {
    return (
        <>
            <Header/>
            <Orders/>
        </>
    );
};

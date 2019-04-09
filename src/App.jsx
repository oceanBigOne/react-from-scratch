import React from "react";
import { hot } from "react-hot-loader";

import style from "./css/app.css";
import CheckboxSwitch from "./components/form/checkboxSwitch/CheckboxSwitch";

const App = () => {
    return <div className={style.app} >react Starter 🚀 { API_URL }<hr /><div><CheckboxSwitch id="test"/></div></div>;
};

export default hot(module)(App);
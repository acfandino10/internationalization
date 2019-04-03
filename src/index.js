import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider, addLocaleData} from 'react-intl';
import esLocaleData from 'react-intl/locale-data/es';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";


import JobsList from "./components/jobsList";

addLocaleData(esLocaleData);

var lang = navigator.language || navigator.userLanguage;
console.log(lang)

ReactDOM.render(
(lang === 'en-US')?(<IntlProvider locale="en" messages= {localeEnMessages}>
        <JobsList/>
    </IntlProvider>):(<IntlProvider locale="es" messages= {localeEsMessages}>
    <JobsList/>
</IntlProvider>), document.getElementById("root")
);
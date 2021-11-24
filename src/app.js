import react from "react"
import about from "./components/about";
import contact from "./components/contact";
import navbar from "./components/navbar";
import portfolio from "./components/portfolio";
import resume from "./components/resume";

export default function app(); {
    return(
        <main>
            <about/>
             <contact/>
             <navbar/>
             <portfolio/>
             <resume/>
        </main>     
    );
}
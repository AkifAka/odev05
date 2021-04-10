import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Game } from "./Game";
import Home from "./home";

const notFound = () =>{
    return(
        <div>
            <h2>Sayfa Bulunamadı</h2>
            <p>
                Aradığınız sayfaya ulaşılamıyor.
            </p>
        </div>
    )
}

class App extends React.Component{
    render(){
        return(
            <HashRouter>
                <Switch>
                    <Route exact path="/Game" component={Game}/>
                    <Route exact path="/" component={Home}/>

                </Switch>
            </HashRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("root"));
/**
 * Libraries
 */

import React,{
    Component
} from 'react';

import {
    connect
} from 'react-redux';

import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
 
 /**
  * Components
  */
import App3x3 from './components/app3x3';
import App4x4 from './components/app4x4';
import Welcome from './components/WelcomePage/welcomePage';
 /**
  * Styles
  */
 
 /**
  * Actions
  */
 
 
 /**
  * App component definition and export
  */
 
 export class App extends Component {
 
    /**
     * Constructor
     */
 
   
    /**
     * Methods
     */

    renderRoutes = () => {
        if(this.props.isAuthenticated){
            return(
                <div>
                    <Switch>
                        <Route 
                            // exact 
                            path="/tictactoe"
                            component={App3x3}
                            // render={props => <App {...props}/>}
                            />
                        <Route 
                            // exact 
                            path="/tictactoe4x4"
                            component={App4x4}
                            // render={props => <App4x4 {...props}/>}
                            />
                        <Route 
                            exact 
                            path="/"
                            component={Welcome}
                            />
                        <Redirect to="/"/>
                        
                        
                        {/* <Route 
                            render={()=>(<h1>404</h1>)}/> */}
                        {/* <Route 
                            exact 
                            path="/"
                            render={()=>(<div>Hey</div>)}/> */}

                        {/* <Route
                            // exact 
                            path="/Home"
                            render={() => (
                                <Suspense fallback={<div>Loading...</div>}>
                                    <Home />
                                </Suspense>
                            )}/> */}
                    </Switch>
                </div>
            )
        }else{
            return(
                <div>
                    <Switch>
                        <Route 
                            exact 
                            path="/"
                            component={Welcome}
                            // render={props => <Welcome {...props}/>}
                            />
                        <Redirect to="/"/>
                    </Switch>
                </div>
            )
        }
    }
 
    /**
     * Markup
     */
 
    render(){
       return(
             <div>
               {this.renderRoutes()}
             </div>
       );
    }
 }
 
 /**
  * Prop types
  */
 
  
 export default connect(
    (state) => {
       return {
            isAuthenticated: state.auth.token !== null
       };
    }
 )(App);
 
 
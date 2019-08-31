/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* Styles
*/

import './page2.scss';

/**
* Page2 component definition and export
*/

class Page2 extends Component {

    /**
    * Constructor
    */

   constructor(props) {
        super(props);
        this.state = {
            showImageButtons: true
        }
    }

    /**
    * Markup
    */

    render(){
        return(
            <div className="page2">
                <div 
                    className={"login-page2"}
                    onClick={() => this.props.newUser(false)}
                >
                    {this.props.isAuth ? `Welcome ${this.props.user}`: "Login"}
                </div>
            </div>
        );
    }
}

export default Page2;

/**
* Libraries
*/

import React,{
    Component
} from 'react';

/**
* MainBox component definition and export
*/

class MainBox extends Component {
    
    /**
    * Markup
    */

    render(){
        return(
            <div>
                {this.props.children}
            </div>
        );
    }
}

export default MainBox;

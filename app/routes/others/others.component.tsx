import * as React from 'react';
import { NavLink } from 'react-router-dom';
//import * as PropTypes from 'prop-types';

export interface State{}

export default class Others extends React.Component<any, State> {

    constructor(props:any) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div className="others-wapper">
                <nav className="others-submenu">
                    <ul>
                        <li>
                            <NavLink to="/others/one" 
                                activeClassName="active">Others One</NavLink>
                        </li>
                        <li>
                            <NavLink to="/others/two"
                                activeClassName="active">Others Two</NavLink>
                        </li>
                    </ul>
                </nav>
                <section className="others-content">
                    {this.props.children}
                </section>
            </div>
        )
    }
}

// Others.propTypes = {
// };
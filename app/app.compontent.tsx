import * as React from 'react';
import { NavLink } from 'react-router-dom';
// import * as propTypes from 'prop-types';

export interface State{
    
}

export default class App extends React.Component<any,State>  {

    constructor(props:any) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div className="main-wapper">
                <header className="main-header">
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/home"
                                    activeClassName="active">Home</NavLink>
                                </li>
                            <li>
                                <NavLink to="/others"
                                    activeClassName="active">Others</NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>
                <section className="main-content">
                    {this.props.children}
                </section>
                <footer className="main-foot">
                    Copyright © 2013-2017 company's name   company's website All Rights Reserved. 备案号：XXX
                </footer>
            </div>
        )
    }
}

// App.propTypes = {
// };
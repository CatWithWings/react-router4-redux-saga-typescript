import * as React from 'react';
// import * as PropTypes from 'prop-types';

export interface State{}

export default class OthersTwo extends React.Component<any, State>  {

    constructor(props:any) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div>
                others two
            </div>
        )
    }
}

// OthersTwo.propTypes = {
// };
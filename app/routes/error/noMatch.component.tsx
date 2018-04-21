import * as React from 'react';
// import * as PropTypes from 'prop-types';

export interface State{}

export default class NoMatch extends React.Component<any, State> {

    constructor(props: any) {
        super(props);
        this.state = {
        };
    } 

    render() {
        return (
            <div>
                404
            </div>
        )
    }
}

// NoMatch.propTypes = {
// };
import * as React from 'react';
// import * as PropTypes from 'prop-types';

export interface State{}

export default class Home extends React.Component<any, State> {

    constructor(props:any) {
        super(props);
        this.state = {
        };
    }

    add(){
        this.props.changeAndAdd();
    }

    addOnly(){
        this.props.addOne();
    }

    render() {
        const { addCount, status } = this.props;

        return (
            <div className="home-content">
                <h3>home</h3>
                &nbsp;
                <div>
                    <button type="button"
                        onClick={this.addOnly.bind(this)}>点击我只触发计数不触发状态</button>
                </div>
                &nbsp;
                <div>
                    <span>{addCount}</span>
                    &nbsp;
                    <button type="button"
                        onClick={this.add.bind(this)}>+</button>
                </div>
                &nbsp;
                <p>{ status }</p>
            </div>
        )
    }
}

// Home.propTypes = {
// };
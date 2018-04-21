import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect, Dispatch } from 'react-redux';
import { withRouter } from 'react-router-dom'

import Home from '../routes/home.component';

import * as HomeActions from '../actions/home.actions';

function mapStateToProps(state:any) {
    return {
        addCount : state.homeReducer.add,
        status : state.homeReducer.changeStatus,
   }
}

function mapDispatchToProps(dispatch:Dispatch<HomeActions.HomeActionsAll>) {
    let actions = Object.assign({}, HomeActions)

    return bindActionCreators(actions, dispatch)
}

export function mergeProps(stateProps: any, dispatchProps: any, ownProps: any) {
    return { ...ownProps, ...stateProps, ...dispatchProps};
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps, mergeProps)(Home));
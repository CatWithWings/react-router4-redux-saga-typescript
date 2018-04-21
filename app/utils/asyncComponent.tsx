import * as React from 'react'

export default function asyncComponent(importComponent: any) {
    class AsyncComponent extends React.Component<{}, { component: string }> {
        constructor(props: {}  ) {
            super(props)

            this.state = {
                component: ''
            }
        }

        async componentDidMount() {
            const { default: component } = await importComponent()

            this.setState({
                component: component
            })
        }

        render() {
            const C = this.state.component

            return C ? <C {...this.props} /> : null
        }
    }

  return AsyncComponent
}

import React from 'react';
import { withRouter } from 'react-router-dom';
import PreLoader from '../PreLoader/PreLoader';
import DescriptionProducts from './DescriptionProducts';



class ContainerDescriptionProducts extends React.Component {
    componentDidMount() {
        this.props.getCurrentProduct(this.props.match.params.id)
    }

    componentWillUnmount() {
        this.props.addViewedProducts(this.props.currentProduct);
        this.props.addcurrentProduct([]);
    }

    componentWillUpdate(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.getCurrentProduct(nextProps.match.params.id)
        }

    }

    render() {
        if (this.props.currentProduct.length === 0) {
            return <PreLoader />
        }
        return (
            <DescriptionProducts {...this.props} />
        )
    }

}

export default withRouter(ContainerDescriptionProducts);


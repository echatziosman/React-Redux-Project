import React, { Component } from 'react';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button} from "reactstrap";
import alertify from "alertifyjs";

class CartDetail extends Component {

    removeFromCart(product) {
        this.props.actions.removeFromCart(product);
        alertify.error(product.productName + "sepetten silindi", 2);
    }

    renderDetail() {
        return (
            <Table >
                <thead>
                 <h3>Sepetiniz</h3><hr/> 
                    <tr>
                        <th>Id</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>

                <tbody>
                    {this.props.cart.map(cartItem => (
                        <tr key={cartItem.product.id}>
                            <th scope="row">{cartItem.product.id}</th>
                            <td>{cartItem.product.productName}</td>
                            <td>{cartItem.product.unitPrice}</td>
                            <td>{cartItem.quantity}</td>
                            <td><Button color="danger" onClick={() => this.removeFromCart(cartItem.product)}>Sil</Button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </Table>
            
        )
    }

    renderEmpty() {
        return (
            <h1>Sepetiniz Boş</h1>
            
        )
    }

    render() {
        return (
            <div>
                {this.props.cart.length > 0 ? this.renderDetail() : this.renderEmpty()}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cartReducer
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: {
            removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
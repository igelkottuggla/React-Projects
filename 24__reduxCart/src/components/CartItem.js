import React from 'react';
import { connect } from 'react-redux';
import { removeItem, toggleAmount } from '../actions';

const CartItem = ({ img, title, price, amount, remove, toggleAmount }) => {
    return (
        <div className='cart-item'>
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className='item-price'>${price}</h4>
                <button className='remove-btn' onClick={() => remove()}>
                    remove
                </button>
            </div>
            <div>
                <button
                    className='amount-btn'
                    onClick={() => toggleAmount('inc')}
                >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M10.707 7.05L10 6.343 4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z' />
                    </svg>
                </button>
                <p className='amount'>{amount}</p>
                <button
                    className='amount-btn'
                    onClick={() => {
                        amount === 1 ? remove() : toggleAmount('dec');
                    }}
                >
                    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'>
                        <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
                    </svg>
                </button>
            </div>
        </div>
    );
};

const mapDispatchToProps = (dispatch, ownProps) => {
    const { id } = ownProps;
    return {
        remove: () => dispatch(removeItem(id)),
        toggleAmount: (toggle) => {
            dispatch(toggleAmount(id, toggle));
        },
    };
};

export default connect(null, mapDispatchToProps)(CartItem);

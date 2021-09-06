import React from 'react';
import CartItem from './CartItem';
import { connect } from 'react-redux';
import { clearCart, getTotals } from '../actions';

const CartContainer = ({ cart = [], total, dispatch }) => {
    React.useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);
    if (cart.length === 0) {
        return (
            <section className='cart'>
                <header>
                    <h2>your bag</h2>
                    <h4 className='empty-cart'>is currently empty</h4>
                </header>
            </section>
        );
    }
    return (
        <section className='cart'>
            <header>
                <h2>your bag</h2>
            </header>
            <article>
                {cart.map((item) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </article>
            <footer>
                <hr />
                <div className='cart-total'>
                    <h4>
                        total <span>${total}</span>
                    </h4>
                </div>
                <button
                    className='btn clear-btn'
                    onClick={() => dispatch(clearCart())}
                >
                    clear cart
                </button>
            </footer>
        </section>
    );
};

const mapStateToProps = (state) => {
    const { cart, total } = state;
    return { cart, total };
};

export default connect(mapStateToProps)(CartContainer);

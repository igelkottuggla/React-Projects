import { CLEAR_CART, REMOVE, GET_TOTALS, TOGGLE_AMOUNT } from './actions';
import cartItems from './cart-items';

const initialStore = {
    cart: cartItems,
    total: 0,
    amount: 0,
};

const reducer = (state = initialStore, action) => {
    if (action.type === CLEAR_CART) {
        return { ...state, cart: [] };
    } else if (action.type === REMOVE) {
        return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
        };
    } else if (action.type === GET_TOTALS) {
        let { total, amount } = state.cart.reduce(
            (cartTotal, currentItem) => {
                const { price, amount } = currentItem;
                cartTotal.amount += amount;
                const itemTotal = amount * price;
                cartTotal.total += itemTotal;
                return cartTotal;
            },
            { total: 0, amount: 0 }
        );
        total = +total.toFixed(2);
        return { ...state, total, amount };
    } else if (action.type === TOGGLE_AMOUNT) {
        return {
            ...state,
            cart: state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.toggle === 'inc') {
                        return (item = { ...item, amount: item.amount + 1 });
                    }
                    return (item = { ...item, amount: item.amount - 1 });
                }
                return item;
            }),
        };
    }
    return state;
};

export default reducer;

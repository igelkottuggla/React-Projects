import React from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
    return (
        <Provider store={store}>
            <Navbar />
            <CartContainer />
        </Provider>
    );
}

export default App;

import React, { createContext, useState } from 'react';
export const UserPreferenceContext = createContext({
    preference:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
});
function UserPreferenceContextProvider({children}) {
    const [preference, setPreference] = useState('');
    const showCart = () => {
        setPreference('cart');
    };
    const hideCart = () => {
        setPreference('');
    };
    const showCheckout = () => {
        setPreference('checkout');
    };
    const hideCheckout = () => {
        setPreference('');
    };
    return (
        <UserPreferenceContext.Provider value={{ preference, showCart, hideCart, showCheckout, hideCheckout }}>
            {children}
        </UserPreferenceContext.Provider>
    );
}
export default UserPreferenceContextProvider;

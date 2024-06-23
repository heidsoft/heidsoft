// src/components/Checkout.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './Checkout.css';

const stripePromise = loadStripe('your-public-key-here');

const Checkout = () => {
    return (
        <Elements stripe={stripePromise}>
            <div className="checkout-container">
                <h2>结算</h2>
                <CheckoutForm />
            </div>
        </Elements>
    );
};

export default Checkout;

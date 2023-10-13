import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./PaymentForm";

const PUBLIC_KEY =
	"pk_test_51MnLIgSE5KWLQmVasyGZiGKgFheig48JQSjUcE1IRArAGgHs4W1Gq10OaSuPJRp8NEc1UiBwIHYrEyVyRHusGl3x002LcpbKl4";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

export default function StripeContainer() {
	return <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>;
}

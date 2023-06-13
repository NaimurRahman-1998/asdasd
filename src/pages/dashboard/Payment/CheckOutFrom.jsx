import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import './form.css'
import { toast } from 'react-hot-toast';
const CheckOutFrom = ({ data, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const { user } = useContext(AuthContext)

    useEffect(() => {
        axios.post('https://fabserver-naimurrahman-1998.vercel.app/create-payment-intent', { price })
            .then(data => {
                console.log(data.data.clientSecret)
                setClientSecret(data.data.clientSecret)
            })
    }, [price])

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement)

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            toast.error(error.message)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true)

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName,
                        email: user?.email
                    },
                },
            },
        );
        if (confirmError) {
            toast.error(confirmError)
        }

        console.log(paymentIntent)
        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);
            const details = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                classImage: data.classImage,
                classId: data.classId,
                className: data.className,
                instructorEmail: data.instructorEmail,
                instructorName: data.instructorName
            }
            axios.post('https://fabserver-naimurrahman-1998.vercel.app/payments', details)
                .then(res => {
                    if (res.data.insertedResult.insertedId) {
                        toast.success('payment done Successfully!')
                        axios.put(`https://fabserver-naimurrahman-1998.vercel.app/classes/enrolled/${data.classId}`)
                            .then(response => {
                                console.log(response.data);
                            })
                    }
                })
        }
    }
    return (
        <div className=' border-2 border-green-600 '>
            <div className='text-xl font-semibold mb-[-3rem] flex gap-5 justify-center mt-7'>
                <div>
                    <h1>Payment For : {data.className}</h1>
                    <h1>Payment By  : {data.StudentName}</h1>
                </div>
                <div>
                    <h1>User Email : {data.studentEmail}</h1>
                    <h1>Price      : {data.price} $</h1>
                </div>
            </div>
            <form className=' f bg-neutral-300 bg-transparent opacity-50 hover:opacity-100 border-2 border-black flex justify-center flex-col items-center' onSubmit={handleSubmit}>
                <CardElement
                    className='w-[30rem]'
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <button className='btn btn-warning  w-20 btn-xs '
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
                {transactionId && <p className="text-green-500">Transaction complete with transactionId: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckOutFrom;
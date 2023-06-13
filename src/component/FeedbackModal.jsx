import axios from 'axios';
import React from 'react';
import { toast } from 'react-hot-toast';

const FeedbackModal = ({ data }) => {
    const handleFeedback = event => {
        event.preventDefault();
        const form = event.target;
        const feedback = form.feedback.value;

        axios.put(`https://fabserver-naimurrahman-1998.vercel.app/classes/feedback/${data._id}`, { feedback })
            .then(data => {
                console.log(data.data)
                toast.success('feedback added')
            })

    }
    return (
        <>
            <input type="checkbox" id={data._id} className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">FeedBack for Instructor : {data.instructorName}</h3>
                    <form onSubmit={handleFeedback}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Type Your FeedBack</span>
                            </label>
                            <textarea name='feedback' className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                        </div>
                        <input className='btn btn-info mt-5' type="submit" value="Send Feedback" />
                    </form>
                    <div className="modal-action">
                        <label htmlFor={data._id} className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeedbackModal;
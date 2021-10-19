import { addDoc, collection } from "@firebase/firestore";
import React, { useState } from "react";
import db from "../../Utils/Firebase";

const FeedbackModal = () => {
    const [feedback, setFeedback] = useState('')

    const writeToFirebase = async (input) => {
        const docRef = await addDoc(collection(db, "User-Feedback"), {
            feedback: input
        });
    };

    const handleChange =(event) => {
        setFeedback(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        writeToFirebase(feedback)
    }

    return (
            <div className = 'feedback-wrapper'>
                <div className="feedback-header">
                    <h1>We'd love to hear your feedback!</h1>
                </div>
                <div className="feedback-body">
                    <form onSubmit={handleSubmit}>
                        <div className="input-field">
                            <textarea type = 'text' placeholder = 'Write your message here' value = {feedback} onChange={handleChange}></textarea>
                        </div>
                        <div className = 'feedback-submit'>
                            <input type='submit' value ='Submit' />
                        </div>
                    </form>
                </div>
            </div>

    )
};

export default FeedbackModal;
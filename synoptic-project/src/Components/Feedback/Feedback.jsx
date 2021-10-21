import { addDoc, collection } from '@firebase/firestore';
import React, { useState } from 'react';
import db from '../../Utils/Firebase';
import CloseIcon from '@material-ui/icons/Close';
import styled from 'styled-components';

const CloseButton = styled(CloseIcon)`
    color: #fff;
    transition: all 0.3s ease-in-out;
    &:hover {
        color: #DF807E;
    }
`;

const FeedbackModal = () => {
	const [ feedback, setFeedback ] = useState('');
	const [ showButton, setShowButton ] = useState(true);
	const [ showModal, setShowModal ] = useState(true);

	// Create a Firestore document with a field of "feedback", setting the value to the input passed through props under the "User-Feedback" collection
	const writeToFirebase = async (input) => {
		// eslint-disable-next-line -- docRef is never used outside of this  function due to the design
		const docRef = await addDoc(collection(db, 'User-Feedback'), {
			feedback: input
		});
	};

	// Renders the message in the text area as the user types
	const handleChange = (event) => {
		setFeedback(event.target.value);
	};

	// Handles the onClick trigger event from the user submitting feedback
	const handleSubmit = (event) => {
		event.preventDefault(); // Prevents page from refreshing
		writeToFirebase(feedback);
		setShowButton(false); // Unmounts clos button
		setFeedback('Thanks for your feedback!');
	};

	// Toggles the mounting of the Feedback modal
	const toggleModal = () => {
		setShowModal(false);
	};

	return (
		<div>
			{showModal ? (
				<div className="feedback-wrapper">
					<div className="feedback-header">
						<h1>We'd love to hear your feedback!</h1>
						<div className="button-container">
							<button className="toggle-button" data-testid="toggle-button">
								<CloseButton onClick={toggleModal} />
							</button>
						</div>
					</div>
					<div className="feedback-body">
						<form onSubmit={handleSubmit}>
							<div className="input-field">
								<textarea
									type="text"
									placeholder="Write your message here"
									value={feedback}
									onChange={handleChange}
								/>
							</div>
							{showButton ? (
								<div className="feedback-submit">
									<input type="submit" value="Submit" />
								</div>
							) : null}
						</form>
					</div>
				</div>
			) : null}
		</div>
	);
};

export default FeedbackModal;

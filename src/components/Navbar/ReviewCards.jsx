import React from 'react';
import cl from './ReviewCards.module.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getGamesFromAPI } from '../../API/Games';

const ReviewCards = (props) => {
	return (
		<div className={cl.reviews}>
			<h1>Latest Reviews</h1>
			<div className={cl.review}>
				<div className={cl.reviews_cards}>
					<Card style={{ width: '18rem', border: 'none' }}>
						<Card.Img variant="top" src="https://livedemo00.template-help.com/joomla_53859/images/pages/page1-img15.jpg" />
						<Card.Body>
							<Card.Title></Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Link href="#">PS</Card.Link>
							<Card.Link href="#">Xbox</Card.Link>
							<Card.Link href="#">PC</Card.Link>
						</Card.Body>
					</Card>

					<Card style={{ width: '18rem', border: 'none' }}>
						<Card.Img variant="top" src="https://livedemo00.template-help.com/joomla_53859/images/pages/page1-img15.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Link href="#">PS</Card.Link>
							<Card.Link href="#">Xbox</Card.Link>
							<Card.Link href="#">PC</Card.Link>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem', border: 'none' }}>
						<Card.Img variant="top" src="https://livedemo00.template-help.com/joomla_53859/images/pages/page1-img15.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Link href="#">PS</Card.Link>
							<Card.Link href="#">Xbox</Card.Link>
							<Card.Link href="#">PC</Card.Link>
						</Card.Body>
					</Card>
					<Card style={{ width: '18rem', border: 'none' }}>
						<Card.Img variant="top" src="https://livedemo00.template-help.com/joomla_53859/images/pages/page1-img15.jpg" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<Card.Body>
							<Card.Link href="#">PS</Card.Link>
							<Card.Link href="#">Xbox</Card.Link>
							<Card.Link href="#">PC</Card.Link>
						</Card.Body>
					</Card>
				</div>
			</div>
			{/* <button>see all</button> */}
			<Button variant="success">See all</Button>
		</div>
	);
};

export default ReviewCards;
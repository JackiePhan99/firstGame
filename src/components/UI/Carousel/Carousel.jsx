import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyCarousel(props) {
	return (
		<div className="carousel">
			<Carousel fade>
				{
					props.games.map(game => (
						<Carousel.Item>
							<img height="324px"
								className="d-block w-100"
								src={game.background_image}
								alt="Sliders"
							/>
							<Carousel.Caption>
								<h3>{game.name}</h3>
								<p>{game.released}</p>
							</Carousel.Caption>
						</Carousel.Item>
					))
				}
			</Carousel>
		</div>
	);
}

export default MyCarousel;
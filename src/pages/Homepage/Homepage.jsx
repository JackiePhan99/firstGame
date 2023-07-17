import React, { useRef, useEffect, useState } from 'react';
import cl from './Homepage.module.css';
import { getGamesFromAPI } from '../../API/Games';
import MyCarousel from '../../components/UI/Carousel/Carousel';
import ReviewCards from "../../components/Navbar/ReviewCards"

export const Homepage = () => {

	const [games, setGames] = useState([]);

	useEffect(() => getGames(), []);

	async function getGames() {
		const games = await getGamesFromAPI()
		setGames(games)
	}

	return (
		<div className="homePage">
			<MyCarousel games={games} />
			<div className={cl.container}>
				<ul className={cl.platforms}>
					<li className={cl.platform}>
						<img src="https://livedemo00.template-help.com/joomla_53859/images/pages/icon1.png" alt="" />
						<h3>PS5</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
					</li>
					<li className={cl.platform}>
						<img src="https://livedemo00.template-help.com/joomla_53859/images/pages/icon2.png" alt="" />
						<h3>XBOX</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
					</li>
					<li className={cl.platform}>
						<img src="https://livedemo00.template-help.com/joomla_53859/images/pages/icon3.png" alt="" />
						<h3>PC</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
					</li>
					<li className={cl.platform}>
						<img src="https://livedemo00.template-help.com/joomla_53859/images/pages/icon4.png" alt="" />
						<h3>Wii U</h3>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</p>
					</li>
				</ul>
			</div>
			<ReviewCards />
			<footer>
				<div className={cl.links}>
					<span>Follow us:</span>
					<a href="" className={cl.link}><img src="/images/fb.svg" alt="Facebook" /></a>
					<a href="" className={cl.link}><img src="/images/twitter.svg" alt="Twitter" /></a>
					<a href="" className={cl.link}><img src="/images/instagram.svg" alt="Instagram" /></a>
					<a href="" className={cl.link}><img src="/images/youtube.svg" alt="Youtube" /></a>
				</div>
				<div className={cl.copyright}>
					Games World © 2023 Privacy Policy
				</div>
			</footer>
		</div>
	);


};

export default Homepage;

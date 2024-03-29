import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useDepartmentQuery } from '../../hooks/useDepartmentQuery';
import { NavLink } from 'react-router-dom';

function Footer() {
	const { data: Department, isSuccess } = useDepartmentQuery();

	const scrollToTop = () => {
		window.scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<footer id='footer'>
			{/* <div className='inner footer_wrap'>
				<h1>LOGO</h1>
				<p>2023 DECODELAB &copy; ALL RIGHTS RESERVED.</p>
				<p>{`This Company was founded by ${Department[0]?.name} in 1993`}</p>
			</div> */}
			<div className='inner footer_wrap'>
				<div className='footer_top'>
					{/* <div className='footer_top__clock'>
						<div className='clock'>
							<span className='country'>SE</span>
							<div className='clock_text'>
								<span className='clock_realtime'>0</span>
								<span className='clock_dot'> :</span>
								<span className='clock_realtime'>0</span>
								<span className='clock_dot'> :</span>
								<span className='clock_realtime'>0</span>
								<span className='clock_dl on'>AM</span>
								<span className='clock_dl'>PM</span>
							</div>
						</div>
					</div> */}
					<div className='footer_top__content'>
						<ul className='footer_sns'>
							<li>
								<a href='/'>
									<FontAwesomeIcon icon={faFacebook} />
									<i className='fa-brands fa-twitter'></i>
									<span className='text_hidden'>facebook</span>
								</a>
							</li>
							<li>
								<a href='/'>
									<FontAwesomeIcon icon={faInstagram} />
									<i className='fa-brands fa-instagram'></i>
									<span className='text_hidden'>instagram</span>
								</a>
							</li>
							<li>
								<a href='/'>
									<FontAwesomeIcon icon={faEnvelope} />
									<i className='fa-regular fa-envelope'></i>
									<span className='text_hidden'>mail</span>
								</a>
							</li>
							<li>
								<a href='/'>
									<FontAwesomeIcon icon={faShareNodes} />
									<i className='fa-solid fa-share-nodes'></i>
									<span className='text_hidden'>share</span>
								</a>
							</li>
						</ul>
						<div className='footer_desc'>
							<address>110, Sejong-daero, Jung-gu, Seoul, Republic of Korea</address>
							<p className='footer_copy'>
								{`This Company was founded by ${isSuccess && Department[0]?.name} in 2023`}
								<br />
								Family owned and operated since 2008. All rights reserved. &copy; 2023 Paper Tiger
							</p>
						</div>
					</div>
					<button type='button' className='footer_top__btn btn_totop' onClick={scrollToTop}>
						Back to top
					</button>
				</div>
				<div className='footer_bottom'>
					<h1 className='logo'>
						<a href='index.html'>PaperTiger</a>
					</h1>
					<ul className='gnb'>
						<li>
							<NavLink to='/department'>Department</NavLink>
						</li>
						<li>
							<NavLink to='/community'>Community</NavLink>
						</li>
						<li>
							<NavLink to='/gallery'>Gallery</NavLink>
						</li>
						<li>
							<NavLink to='/youtube'>Youtube</NavLink>
						</li>
						<li>
							<NavLink to='/contact'>Contact</NavLink>
						</li>
					</ul>
					<div className='nav_side'>
						<NavLink to='/member' className='nav_side_btn btn_round'>
							<span>JOIN US</span>
						</NavLink>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;

import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { memo, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useGlobalData } from '../../hooks/useGlobalContext';

function Header({ type }) {
	const active = 'on';
	const { MenuOpen, setMenuOpen } = useGlobalData();
	const [Position, setPosition] = useState(0);
	const updateScroll = () => {
		setPosition(window.scrollY || document.documentElement.scrollTop);
	};
	useEffect(() => {
		window.addEventListener('scroll', updateScroll);
	}, []);

	return (
		<>
			<header className={type}>
				<div className={Position < 100 ? 'header_wrap' : 'header_wrap scrollDown'}>
					<h1 className='logo'>
						<Link to='/'>LOGO</Link>
					</h1>
					<nav id='nav'>
						<ul className='gnb'>
							<li>
								<NavLink to='/department' activeClassName={active}>
									Department
								</NavLink>
							</li>
							<li>
								<NavLink to='/community' activeClassName={active}>
									Community
								</NavLink>
							</li>
							<li>
								<NavLink to='/gallery' activeClassName={active}>
									Gallery
								</NavLink>
							</li>
							<li>
								<NavLink to='/youtube' activeClassName={active}>
									Youtube
								</NavLink>
							</li>
							<li>
								<NavLink to='/contact' activeClassName={active}>
									Contact
								</NavLink>
							</li>
						</ul>
					</nav>
					<div className='nav_side'>
						<NavLink to='/member' activeClassName={active} className='nav_side_btn'>
							Join Us
						</NavLink>
					</div>
					<button
						type='button'
						className='menuOpen'
						onClick={() => {
							setMenuOpen(!MenuOpen);
						}}
					>
						<FontAwesomeIcon icon={faBars} />
					</button>
				</div>
			</header>
			{/* <Menu ref={toggleMenu} /> */}
		</>
	);
}

export default memo(Header);

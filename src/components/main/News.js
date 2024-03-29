import { useState, useEffect, memo } from 'react';
import { Link } from 'react-router-dom';

function News({ Scrolled, Pos }) {
	const dummy = [
		{ title: 'Hello6', content: 'Here comes description in detail.' },
		{ title: 'Hello5', content: 'Here comes description in detail.' },
		{ title: 'Hello4', content: 'Here comes description in detail.' },
		{ title: 'Hello3', content: 'Here comes description in detail.' },
		{ title: 'Hello2', content: 'Here comes description in detail.' },
		{ title: 'Hello1', content: 'Here comes description in detail.' },
	];
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		if (data) return JSON.parse(data);
		else return dummy;
	};
	const [Posts] = useState(getLocalData());
	const currentPos = Scrolled - Pos;

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts));
	}, [Posts]);

	return (
		<section id='news' className='news_wrap myScroll'>
			<div className='inner'>
				<h2 style={{ transform: `translateX(${currentPos}px)` }} className='head_title'>
					WHAT WE'RE POSTING WHAT WE'RE POSTING
				</h2>
				<div className='news_list_wrap'>
					<div className='news_list'>
						<ul className='news_item'>
							{Posts.map((post, idx) => {
								if (idx > 4) return null;
								return (
									<li key={idx}>
										<div href='#' className='news_link'>
											<div className='news_info'>
												<p className='news_info__name'>By {post.name}</p>
												<p className='news_info__date'>{post.date}</p>
											</div>
											<p className='news_link__title'>{post.title}</p>
											<p className='news_link__desc'>
												{post.content.length > 100 ? post.content.substr(0, 100) + '...' : post.content}
											</p>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
					<p className='btn_wrap'>
						<Link to='/community' className='btn_round'>
							<span>VIEW MORE</span>
						</Link>
					</p>
				</div>
			</div>
		</section>
	);
}

export default memo(News);

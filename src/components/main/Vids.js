import { memo } from 'react';
import { useSelector } from 'react-redux';

function Vids() {
	const Vids = useSelector((store) => store.youtube.data);
	console.log(Vids);

	return (
		<section className='myScroll'>
			<div className='insights_wrap'>
				<div className='inner'>
					<div className='head_title_wrap'>
						<h2 className='head_title'>LATEST INSIGHTS</h2>
						<p className='btn_wrap'>
							<a href='#' className='btn_round'>
								<span>VIEW ALL</span>
							</a>
						</p>
					</div>
					<div className='gallery_list_wrap'>
						<ul className='gallery_list'>
							{/* <li>
								<a href='#' className='gallery_item'>
									<p className='gallery_item__title'>
										Considering Hiring Us? Our Policy on Website Proposals and PitchesConsidering Hiring Us? Our Policy
										on Website Proposals and Pitches
									</p>
									<div className='gallery_item__info gallery_info'>
										<span className='gallery_info__name'>By Marc Debiak</span>
										<span className='gallery_info__date'>2023/6/5</span>
									</div>
									<div className='gallery_item__img'>
										<img src={`${process.env.PUBLIC_URL}/img/pic6.jpeg`} alt='' className='gallery_img' />
									</div>
								</a>
							</li>
							<li>
								<a href='#' className='gallery_item'>
									<p className='gallery_item__title'>A smarter digital home for the premium smart home solution</p>
									<div className='gallery_item__info gallery_info'>
										<span className='gallery_info__name'>By Marc Debiak</span>
										<span className='gallery_info__date'>2023/6/5</span>
									</div>
									<div className='gallery_item__img'>
										<img src={`${process.env.PUBLIC_URL}/img/main_visual.jpeg`} alt='' className='gallery_img' />
									</div>
								</a>
							</li>
							<li>
								<a href='#' className='gallery_item'>
									<p className='gallery_item__title'>A smarter digital home for the premium smart home solution</p>
									<div className='gallery_item__info gallery_info'>
										<span className='gallery_info__name'>By Marc Debiak</span>
										<span className='gallery_info__date'>2023/6/5</span>
									</div>
									<div className='gallery_item__img'>
										<img src={`${process.env.PUBLIC_URL}/img/pic4.jpeg`} alt='' className='gallery_img' />
									</div>
								</a>
							</li> */}

							{Vids.map((vid, idx) => {
								if (idx >= 3) return null;
								return (
									<li key={idx}>
										<a href='#' className='gallery_item'>
											<p className='gallery_item__title'>
												{vid.snippet.title.length > 70 ? vid.snippet.title.substr(0, 90) + '...' : vid.snippet.title}
											</p>
											<div className='gallery_item__info gallery_info'>
												<span className='gallery_info__name'>By {vid.snippet.videoOwnerChannelTitle}</span>
												<span className='gallery_info__date'>
													{vid.snippet.publishedAt.split('T')[0].split('-').join('.')}
												</span>
											</div>
											<div className='gallery_item__img'>
												<img
													src={vid.snippet.thumbnails.standard.url}
													alt={vid.snippet.title}
													className='gallery_img'
												/>
											</div>
										</a>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
}

export default memo(Vids);

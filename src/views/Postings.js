import React, { useContext, useState } from 'react'
import { PostingCard } from '../components/PostingCard';
import { DataContext } from '../contexts/DataProvider';

export function Postings()
{
	const { postings } = useContext(DataContext);
	const [selectedPost, setSelectedPost] = useState({});
	
	const handleClick = (e, post) => {
		setSelectedPost(post);
	}

	return (
		<React.Fragment>
			<div className="dashboard-tab p-0 bg-white rounded-lg shadow-xs pl-3">
				<div className="row">
					<div className="col-lg-4 chat-left border-right-light p-4">
						<form action="#" className="mt-0">
							<div className="search-form">
								<i className="ti-search font-xs"></i>
								<input type="text" className="form-control text-grey-500 mb-0 bg-greylight border-0" placeholder="Search here." />
							</div>
						</form>
						<div className="section full mt-2 mb-2">
							<ul className="list-group list-group-flush d-flex justify-content-between">
								{
									Object.values(postings)
									?
										Object.values(postings[ 0 ]).map((post, idx) => (
											<li onClick={(e) => handleClick(e, post)} key={idx} className="rounded-lg bg-transparent pt-3 pb-3 pr-0 border-0 list-group-item no-icon pl-0">
												<figure className="avatar float-left mb-0 mr-2">
													<img src="https://via.placeholder.com/80x80.png" alt="." className="w45" />
												</figure>
												<h3 className="fw-700 mb-0 mt-1 d-inline-block">
													<h2 className="font-xsss text-grey-900 fw-700 d-block">{post.title}</h2>
													<span className="d-inline fw-500 text-grey-500">{ post.school }</span>
												</h3>
												<h4 className="fw-600 mb-0 text-right text-grey-500 font-xssss float-right mt-2 d-inline-block">
													4:09 pm  
													<br />
													{/* <i className="ti-star d-block mt-1"></i> */}
												</h4>
											</li>
										))
									:
									null
								}
							</ul>
						</div>
					</div>
					<div className="col-lg-8 pl-0">
						<PostingCard selectedPost={selectedPost} />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}


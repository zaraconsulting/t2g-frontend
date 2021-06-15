import React, { useContext, useState } from 'react'
import { PlayerCard } from '../components/PlayerCard';
import { SelectionList } from '../components/SelectionList';
import { Tab } from '../components/Tab';
import { DataContext } from '../contexts/DataProvider';

export const Home = (props) =>
{
	const { coaches, players, recruiters } = useContext(DataContext);
	const [selectionListData, setSelectionListData] = useState({ isSelected: false, selection: null, list: [] });
	const [playerCardData, setPlayerCardData] = useState({});
	// const [searchTerm, setSearchTerm] = useState('');
	const [selectedTabId, setSelectedTabId] = useState(1)

	// const editSearchTerm = (e) => {
	// 	setSearchTerm(e.target.value);
	// 	console.log(searchTerm);
	// }

	const isActive = (id) => {
		return selectedTabId === id;
	}

	const setActiveTab = selectedTab => {
		setSelectedTabId({ selectedTab })
	}

	// const dynamicSearch = () => {
	// 	console.log(selectionListData.list);
		// return selectionListData;
		// return selectionListData.list.filter(obj => obj.name.toLowerCase().includes(searchTerm.toLowerCase())) || selectionListData;
	// }

	const handleShowData = (sel) => {
		
		switch (sel) {
			case 'players':
				setSelectionListData({ isSelected: true, selection: 'players', list: [...players] });
				return players;
			case 'coaches':
				setSelectionListData({ isSelected: true, selection: 'coaches', list: [...coaches] });
				return coaches;
			case 'recruiters':
				setSelectionListData({ isSelected: true, selection: 'recruiters', list: [...recruiters] });
				return recruiters;
			default:
				break;
		}
	}

	return (
		<div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">
			<div className="row">
				<React.Fragment>
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'players'} players={players} />
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'coaches'} coaches={coaches} />
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'recruiters'} recruiters={recruiters} />

					{/* <a href="#card-info" onClick={() => handleShowData('coaches')}  className="col-lg-4 mb-3">
						<div className="card border-0 w-100 p-0 rounded-xxl bg-white theme-light-bg shadow-md">
							<div className="card-body p-4">
								<div className="row">
									<div className="col-6">
										<h2 className="text-grey-900 fw-900 display1-size mt-2 mb-1 ls-3 lh-1">{ coaches.length }</h2>
										<h4 className="fw-700 text-grey-500 font-xssss ls-3 text-uppercase mb-0 mt-0">COACHES</h4>
									</div>
									<div className="col-6 text-left">
										<div id="chart-users-blue"></div>
									</div>
								</div>
							</div>
						</div>
					</a>

					<a href="#card-info" onClick={() => handleShowData('recruiters')}  className="col-lg-4 mb-3">
						<div className="card border-0 w-100 p-0 rounded-xxl bg-white theme-light-bg shadow-md">
							<div className="card-body p-4">
								<div className="row">
									<div className="col-6">
										<h2 className="text-grey-900 fw-900 display1-size mt-2 mb-1 ls-3 lh-1">{ recruiters.length }</h2>
										<h4 className="fw-700 text-grey-500 font-xssss ls-3 text-uppercase mb-0 mt-0">RECRUITERS</h4>
									</div>
									<div className="col-6 text-left">
										<div id="chart-users-blue"></div>
									</div>
								</div>
							</div>
						</div>
					</a> */}
					
					<div className="col-lg-12">
                        <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
                              
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Search for a player, coach, or recruiter</label>
											<div className="search-form">
												<i className="ti-search font-xs"></i>
												<input defaultValue={''} type="text" name="comment-name" className="form-control" placeholder="Type name here..." />
											</div>
                                        </div>        
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>

					<div className="col-lg-12">
                        <div className="dashboard-tab p-0 bg-white rounded-lg shadow-xs pl-3">
                            <div className="row">
                                
								<SelectionList setPlayerCardData={setPlayerCardData} data={selectionListData} />

								<div id="card-info" className="col-lg-8 pl-0">

									{ !selectionListData.isSelected ? <p className="text-center">Nothing to display</p> : null }

									{ selectionListData.isSelected && selectionListData.selection === 'players' ? <PlayerCard data={playerCardData} /> : null }
									
                                </div>
                            </div>
                        </div>
                    </div>

					{/* <div className="col-lg-12 mt-3 cart-wrapper">
              <div className="table-content table-responsive shadow-md">
                <table className="table text-center bg-white rounded-xxl ">
                  <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                    Coaches
                  </h2>
                  <Coach />

                </table>
              </div>
            </div> */}

					{/* <div>
            mapping over all of the coaches to populate all of them
          {props.coaches.map((c, idx) => (
              {props.coaches.map((c, idx) => (
              <Coach/>
            ))}
            </div> */}

					{/* <div className="col-lg-12 mt-3 cart-wrapper">
              <div className="table-content table-responsive shadow-md">
                <table className="table text-center bg-white rounded-xxl ">
                  <br />
                  <h2 className="text-grey-900 fw-900 display3-size mt-0 mb-0 lh-1">
                    Players
                  </h2>
                  <tbody>
                    <tr>
                      <td className="product-thumbnail pl-4 text-left">
                        <img
                          src="https://via.placeholder.com/75x100.png"
                          alt="Product Thumnail"
                          className="w75 rounded-lg"
                        />
                      </td>
                      <td className="product-headline text-left wide-column">
                        <h3>
                          <a href="." className="text-grey-900 fw-600">
                            Super skinny blazer
                            </a>
                        </h3>
                      </td>
                      <td className="product-remove text-right">
                        <a href=".">
                          <i className="ti-trash font-xs text-grey-500"></i>
                        </a>
                        <a href=".">
                          <i className="ti-eye ml-2 font-xs text-grey-500"></i>
                        </a>
                        <a href=".">
                          <i className="ti-pencil ml-2 font-xs text-grey-500"></i>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div> */}
				</React.Fragment>
			</div>
		</div>
	);
}

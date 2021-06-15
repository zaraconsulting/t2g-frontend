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
	const [inputSearch, setInputSearch] = useState(false);

	const handleSearch = (e) => {
		if (e.target.value.length > 0) {
			setInputSearch(true);
			var users = [...coaches, ...players, ...recruiters];
			let selectionList = [];

			for (const user of users) {
				if (user.name.toLowerCase().includes(e.target.value.toLowerCase())) {
					selectionList.push(user);
				}
			}
			setSelectionListData({ isSelected: false, selection: 'search', list: selectionList });
		}
		else {
			setInputSearch(false);
			setSelectionListData({ isSelected: false, selection: null, list: [] });
		}
	}

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
		setInputSearch(true);
	}

	return (
		<div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">
			<div className="row">
				<React.Fragment>
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'players'} players={players} />
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'coaches'} coaches={coaches} />
					<Tab handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={'recruiters'} recruiters={recruiters} />

					<div id="card-info" className="col-lg-12">
                        <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">
                              
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-12 mb-3">
                                        <div className="form-gorup">
                                            <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Search for a player, coach, or recruiter</label>
											<div className="search-form">
												<i className="ti-search font-xs"></i>
												<input defaultValue={''} onChange={(e) => handleSearch(e)} type="text" name="comment-name" className="form-control" placeholder="Type name here..." />
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

								<div className="col-lg-8 pl-0">

									{ !selectionListData.isSelected && !selectionListData.selection === 'search' ? <p className="text-center">Nothing to display</p> : null }

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

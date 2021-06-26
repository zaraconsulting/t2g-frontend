import React, { useContext, useState } from 'react'
import { CoachCard } from '../components/CoachCard';
import { PlayerCard } from '../components/PlayerCard';
import { RecruiterCard } from '../components/RecruiterCard';
import { SelectionList } from '../components/SelectionList';
import { Tab } from '../components/Tab';
import { DataContext } from '../contexts/DataProvider';

export const Home = (props) =>
{
  const { coaches, players, recruiters } = useContext(DataContext);
  const [ selectionListData, setSelectionListData ] = useState({ isSelected: false, selection: null, list: [] });
  const [ cardData, setCardData ] = useState({});
  const [ inputSearch, setInputSearch ] = useState(false);

  const handleSearch = (e) =>
  {
    e.preventDefault();

    if (e.target.value.length > 0)
    {
      setInputSearch(true);
      var users = [ ...coaches, ...players, ...recruiters ];
      let selectionList = [];

      for (const user of users)
      {
        if (user.team.toLowerCase().includes(e.target.value.toLowerCase()) || user.name.toLowerCase().includes(e.target.value.toLowerCase()))
        {
          selectionList.push(user);
        }
      }
      setSelectionListData({ isSelected: false, selection: 'search', list: selectionList });
    }
    else
    {
      setInputSearch(false);
      setSelectionListData({ isSelected: false, selection: null, list: [] });
    }
  }

  const handleShowData = (sel) =>
  {

    switch (sel)
    {
      case 'players':
        setSelectionListData({ isSelected: true, selection: 'players', list: [ ...players ] });
        return players;
      case 'coaches':
        setSelectionListData({ isSelected: true, selection: 'coaches', list: [ ...coaches ] });
        return coaches;
      case 'recruiters':
        setSelectionListData({ isSelected: true, selection: 'recruiters', list: [ ...recruiters ] });
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

          <div className="col-lg-12">
          {/* <div id="card-info" className="col-lg-12"> */}
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

                <SelectionList setCardData={setCardData} data={selectionListData} />

                <div className="col-lg-8 pl-0">

                  {!selectionListData.isSelected && !selectionListData.selection === 'search' || selectionListData.list.length === 0 ? <p className="text-center">Nothing to display</p> : null}

                  {selectionListData.isSelected && selectionListData.selection === 'players' ? <PlayerCard data={cardData} /> : null}
                  
                  {selectionListData.isSelected && selectionListData.selection === 'coaches' ? <CoachCard data={cardData} /> : null}

                  {selectionListData.isSelected && selectionListData.selection === 'recruiters' ? <RecruiterCard data={cardData} /> : null}

                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}

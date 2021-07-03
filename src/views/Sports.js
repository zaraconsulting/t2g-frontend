import React, { useContext, useState } from 'react'
import { PlayerCard } from '../components/PlayerCard';
import { SelectionList } from '../components/SelectionList';
import { SportsTab } from '../components/SportsTab';
import { DataContext } from '../contexts/DataProvider';

export const Sports = () => 
{
  const { players, sports } = useContext(DataContext);
  const [ selectionListData, setSelectionListData ] = useState({ isSelected: false, selection: null, list: [] });
  const [ cardData, setCardData ] = useState({ selected: false });
  // eslint-disable-next-line
  const [ inputSearch, setInputSearch ] = useState(false);

  const handleSearch = (e) =>
  {
    e.preventDefault();

    if (e.target.value.length > 0)
    {
      setInputSearch(true);
      var users = [ ...players ];
      let selectionList = [];

      for (const user of users)
      {
        if (user.team.toLowerCase().includes(e.target.value.toLowerCase()) || user.firstName.toLowerCase().includes(e.target.value.toLowerCase()) || user.lastName.toLowerCase().includes(e.target.value.toLowerCase()))
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

  const handleShowData = (select) =>
  {
    setCardData({});

    const sel = select ? select : null;
    let players = [];

    for (const s of sports) {
      if (sel === s.getName()) {
        players = s.getPlayers();
        break;
      }
    }

    switch (sel)
    {
      case sel:
        setSelectionListData({ isSelected: true, selection: sel, list: [ ...players ] });
        return sports;
      default:
        break;
    }
    setInputSearch(true);
  }

  return (
    <div className="dashboard-tab p-4 rounded-lg shadow-xs bg-white">
      <div className="row">
        <React.Fragment>

          {Object.values(sports).map(sport => <SportsTab key={sport.getName()} handleShowData={handleShowData} selectionListData={selectionListData.selection} dataType={sport.getName()} info={sport} />)}

          {/* <div className="col-lg-12"> */}
          <div id="sports-card-info" className="col-lg-12">
            <div className="dashboard-tab cart-wrapper p-5 bg-white rounded-lg shadow-xs">

              <form action="#">
                <div className="row">
                  <div className="col-lg-12 mb-3">
                    <div className="form-gorup">
                      <label className="mont-font fw-600 font-xssss" htmlFor="comment-name">Search for a player by position, team, or name</label>
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

                  {/* { !selectionListData.isSelected && !selectionListData.selection === 'search'? <p className="text-center">Nothing to display</p> : null} */}

                  {selectionListData.isSelected && selectionListData.selection === 'players' ? <PlayerCard data={cardData} /> : null}

                  {selectionListData.isSelected && (selectionListData.selection !== 'players' || selectionListData.selection !== 'search') ? <PlayerCard data={cardData} /> : null}

                  { !selectionListData.list || !cardData.selected ? <p className="text-center">Nothing to display</p> : null }

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

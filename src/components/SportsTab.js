import React from 'react'

export const SportsTab = (props) => {
    return (
        <a href="#card-info" onClick={ () => props.handleShowData(props.dataType) } className="col-lg-4 mb-3">
            <div className={props.dataType === props.selectionListData ? `card border-0 w-100 p-0 shadow-md bg-facebook` : `card border-0 w-100 p-0 shadow-md`}>
                <div className="card-body p-4">
                    <div className="row">
                        <div className="col-12">
                            <h2 className={ `${ props.dataType === props.selectionListData ? 'text-white fw-900' : 'text-grey-900 fw-900' } display1-size mt-2 mb-1 ls-3 lh-1`}>{ props.info.getPlayers() ? props.info.getPlayers().length : 0 }</h2>
                            <h4 className={ `${ props.dataType === props.selectionListData ? 'fw-900 text-white' : 'fw-700 text-grey-500' } font-xssss ls-3 text-uppercase mb-0 mt-0`}>{ props.dataType.toUpperCase() }</h4>
                        </div>
                        <div className="col-12 text-left">
                            <div id="chart-users-blue"></div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}

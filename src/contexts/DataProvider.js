import React, { createContext, useEffect, useState } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ coaches, setCoaches ] = useState([]);
    const [players, setPlayers] = useState([]);
    const [teams, setTeams] = useState([])

    useEffect(() =>
    {
        function getCoaches()
        {
            fetch(`${ process.env.REACT_APP_ROOL_URL }/coaches`)
                .then((r) => r.json())
                .then((data) =>
                {
                    setCoaches(data)
                });
        }
        getCoaches();
    }, []);

    useEffect(() =>
    {
        function getPlayers()
        {
            fetch(`${ process.env.REACT_APP_ROOL_URL }/players`)
                .then((r) => r.json())
                .then((data) =>
                {
                    setPlayers(data)
                });
        }
        getPlayers();
    }, []);

    useEffect(() =>
    {
        function getTeams()
        {
            fetch(`${ process.env.REACT_APP_ROOL_URL }/teams`)
                .then((r) => r.json())
                .then((data) =>
                {
                    setTeams(data)
                });
        }
        getTeams();
    }, []);

    const value = { coaches, players, teams }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}

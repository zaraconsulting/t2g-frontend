import React, { createContext, useEffect, useState } from 'react';
import firebase from '../util/firebase';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [ coaches, setCoaches ] = useState([]);
    const [players, setPlayers] = useState([]);
    const [recruiters, setRecruiters] = useState([]);
    const db = firebase.database();

    useEffect(() =>
    {
        function getCoaches()
        {
            let data = [];
            db.ref('users/coaches').once('value')
                .then(snapshop => {
                    snapshop.forEach(child => {
                        data.push(child.val());
                    })
                    setCoaches(data);
                })
        }
        getCoaches();
    }, [db]);

    useEffect(() =>
    {
        function getPlayers()
        {
            let data = [];
            db.ref('users/players').once('value')
                .then(snapshop => {
                    snapshop.forEach(child => {
                        data.push(child.val());
                    })
                    setPlayers(data);
                })
        }
        getPlayers();
    }, [db]);

    useEffect(() =>
    {
        function getRecruiters()
        {
            let data = [];
            db.ref('users/recruiters').once('value')
                .then(snapshop => {
                    snapshop.forEach(child => {
                        data.push(child.val());
                    })
                    setRecruiters(data);
                })
        }
        getRecruiters();
    }, [db]);

    const value = { coaches, players, recruiters }

    return (
        <DataContext.Provider value={value}>
            { props.children }
        </DataContext.Provider>
    )
}

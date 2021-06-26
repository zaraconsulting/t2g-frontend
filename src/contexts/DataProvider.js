import React, { createContext, useEffect, useState } from 'react';
import firebase from '../util/firebase';
import { getPostings, getCoaches, getPlayers, getRecruiters, getSports } from './_helpers';

export const DataContext = createContext();

export const DataProvider = (props) =>
{
    const [ coaches, setCoaches ] = useState([]);
    const [ players, setPlayers ] = useState([]);
    const [ recruiters, setRecruiters ] = useState([]);
    const [ postings, setPostings ] = useState([]);
    const [ sports, setSports ] = useState([]);
    const db = firebase.database();

    useEffect(() =>
    {
        getPostings(setPostings, db);
    }, [ db ])
    
    useEffect(() =>
    {
        getCoaches(setCoaches, db);
    }, [ db ]);
    
    useEffect(() =>
    {
        getPlayers(setPlayers, db);
    }, [ db ]);
    
    useEffect(() =>
    {
        getRecruiters(setRecruiters, db);
    }, [ db ]);
    
    useEffect(() =>
    {
        getSports(setSports, db);
    }, [ db ])

    const value = { coaches, players, recruiters, postings, sports }

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

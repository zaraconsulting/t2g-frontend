import React, { createContext, useEffect, useState } from 'react';
import firebase from '../util/firebase';
import { getPostings, getCoaches, getPlayers, getRecruiters, getSports, getRoles, getUsers } from './_helpers';

export const DataContext = createContext();

export const DataProvider = (props) =>
{
    const [ coaches, setCoaches ] = useState([]);
    const [ players, setPlayers ] = useState([]);
    const [ recruiters, setRecruiters ] = useState([]);
    const [ postings, setPostings ] = useState([]);
    const [ sports, setSports ] = useState([]);
    const [ roles, setRoles ] = useState([]);
    const [ users, setUsers ] = useState([]);
    const db = firebase.database();

    useEffect(() =>
    {
        getRoles(setRoles, db);
        getPostings(setPostings, db);
        getCoaches(setCoaches, db);
        getPlayers(setPlayers, db);
        getRecruiters(setRecruiters, db);
        getSports(setSports, db);
        getUsers(setUsers, db);
    }, [ db ])


    const value = { coaches, players, recruiters, postings, sports, roles, users };

    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}

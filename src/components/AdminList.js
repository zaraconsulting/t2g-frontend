// import React, { useState, useEffect } from 'react';
// import Admin from './Admin';
// import firebase from '../util/firebase';

// export const AdminList = () => {
//     const [adminList, setAdminList] = useState();

//     useEffect(() => {
//       const teamAdminRef = firebase.database().ref('Admin');
//       teamAdminRef.on('value', (snapshot) => {
//         const admins = snapshot.val();
//         const adminList = [];
//         for (let id in admins) {
//           adminList.push({ id, ...admins[id] });
//         }
//         setAdminList(adminList);
//       });
//     }, []);

//     return (
//         <div>{adminList ? adminList.map((admin, index) => <Admin admin={admin} key={index}/>): ''}</div>
//     );
// }

// test page
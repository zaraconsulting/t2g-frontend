// import React from 'react'
// import firebase from "../util/firebase";

// export default function Admin({ admin }) {
//     const deleteAdmin = () => {
//         const teamAdminRef = firebase.database().ref('Admin').child(admin.id);
//         teamAdminRef.remove();
//         console.log('it works')
//     };

//     return (
//       <div>
//         <h1>{admin.title}</h1>
//         <button onClick={() => deleteAdmin()}>Delete</button>
//         <button>Update</button>
//       </div>
//     );
// }


// test page
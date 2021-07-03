import Sport from './repo/Sport';

export const titleCase = (str) =>
{
    return str.toLowerCase().replace(/\b(\w)/g, s => s.toUpperCase());
}

export const getRoles = (func, db, data = []) =>
{
    db.ref('roles').once('value')
        .then(snapshop =>
        {
            snapshop.forEach(child =>
            {
                data.push(child.val())
            })
            func(data);
        })
}

export const getPostings = (func, db, data = []) =>
{
    db.ref('postings').once('value')
        .then(snapshot =>
        {
            snapshot.forEach(child =>
            {
                data.push(child.val());
            })
            func(data);
        })
}
export const getCoaches = (func, db, data = []) =>
{
    db.ref('users').orderByChild('role/name').equalTo('coach').on('value', snapshot =>
    {
        var users = snapshot.val();
        for (const key in users)
        {
            if (Object.hasOwnProperty.call(users, key))
            {
                const u = users[ key ];
                data.push(u);
            }
        }
        func(data);
    });
}
export const getPlayers = (func, db, data = []) =>
{
    db.ref('users').orderByChild('role/name').equalTo('player').on('value', snapshot =>
    {
        var users = snapshot.val();
        for (const key in users)
        {
            if (Object.hasOwnProperty.call(users, key))
            {
                const u = users[ key ];
                data.push(u);
            }
        }
        func(data);
    });
}
export const getRecruiters = (func, db, data = []) =>
{
    db.ref('users').orderByChild('role/name').equalTo('recruiter').on('value', snapshot =>
    {
        var users = snapshot.val();
        for (const key in users)
        {
            if (Object.hasOwnProperty.call(users, key))
            {
                const u = users[ key ];
                data.push(u);
            }
        }
        func(data);
    });
}

export const getUsers = (func, db, data = []) =>
{
    db.ref('users').on('value', snapshot =>
    {
        var users = snapshot.val();
        for (const key in users)
        {
            if (Object.hasOwnProperty.call(users, key))
            {
                const u = users[ key ];
                data.push(u);
            }
        }
        func(data);
    });
    // db.ref('users').once('value')
    //     .then(snapshop =>
    //     {
    //         snapshop.forEach(child =>
    //         {
    //             data.push(child.val());
    //         })
    //         func(data);
    //     })
}

export const getSports = (func, db, data = []) =>
{

    db.ref('sports').once('value')
        .then(snapshot =>
        {
            let sports = data;
            snapshot.forEach(child =>
            {
                let sport = new Sport(child.key.replace('-', ' '));
                sport.populatePositions({ name: Object.keys(child.val())[ 0 ], players: Object.values(Object.values(child.val())[ 0 ]) })
                sports.push(sport);
            })
            func(data);
        })
}
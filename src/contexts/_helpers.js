import Sport from './repo/Sport';

export const getPostings = (func, db, data=[]) =>
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
export const getCoaches = (func, db, data=[]) =>
{
    db.ref('users/coaches').once('value')
        .then(snapshop =>
        {
            snapshop.forEach(child =>
            {
                data.push(child.val());
            })
            func(data);
        })
}
export const getPlayers = (func, db, data=[]) =>
{
    db.ref('users/players').once('value')
        .then(snapshop =>
        {
            snapshop.forEach(child =>
            {
                data.push(child.val());
            })
            func(data);
        })
}
export const getRecruiters = (func, db, data=[]) =>
{
    db.ref('users/recruiters').once('value')
        .then(snapshop =>
        {
            snapshop.forEach(child =>
            {
                data.push(child.val());
            })
            func(data);
        })
}

export const getSports = (func, db, data=[]) =>
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
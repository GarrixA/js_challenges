
function userIdantities(array) {
    const result = { females: {}, males: {}, others: {} };

    array.filter(identity => {
        const [fullName, age, gender] = identity.split(', ');
        const [firstName, secondName] = fullName.split(' ');
        const parsedAge = parseInt(age);

        const identityInfo = { 'second-name': secondName, 'age': parsedAge };

        if (gender === 'female') {
            if (!result.females[firstName]) {
                result.females[firstName] = [identityInfo];
            } else {
                result.females[firstName].push(identityInfo);
            }
        } else if (gender === 'male') {
            if (!result.males[firstName]) {
                result.males[firstName] = [identityInfo];
            } else {
                result.males[firstName].push(identityInfo);
            }
        } else {
            if (!result.others[firstName]) {
                result.others[firstName] = [identityInfo];
            } else {
                result.others[firstName].push(identityInfo);
            }
        }
    });

    const counts = {
        females: countIdentities(result.females),
        males: countIdentities(result.males),
        others: countIdentities(result.others)
    };

    return { organizedData: result, counts: counts };
}

function countIdentities(category) {
    let count = 0;
    for (const key in category) {
        count += category[key].length;
    }
    return count;
}

let identities = [
    "Patrick wyne, 30, male",
    "lil wyne, 32, male",
    "Eric mimi, 21, female",
    "Dodos deck, 21, male",
    "Alian Dwine, 22, male",
    "Patrick wyne, 33, male",
    "Patrick wyne, 10, trans",
    "Patrick wyne, 40, non-binary",
    "Patrick wyne, 30, prefer-not-to-say"
];

let organizedData = organizeIdentities(identities);
console.log(organizedData);

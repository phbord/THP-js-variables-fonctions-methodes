const displayAverageTurnover = (arr) => {
    let revenue = 0;
    const newArr = arr.map(x => revenue += Number(x.revenue));
    return parseInt(revenue/newArr.length);
};

const displayPercentageOfMoneyUsers = (arr) => {
    let revenueNumber = 0;
    const newArr = arr.filter(x => {
        if (x.revenue > 0) {
            revenueNumber += 1;
        }
    });
    return `${parseFloat((revenueNumber/arr.length)*100).toFixed(2)} %`;
};

const displayAverageRevenueOfMoneyUser = (arr) => {
    let revenue = 0;
    let revenueNumber = 0;
    const newArr = arr.filter(x => {
        if (x.revenue > 0) {
            revenue += x.revenue;
            revenueNumber += 1;
        }
    });
    return parseInt(revenue/revenueNumber);
};

const displayATotalMoneyGain = (arr) => {
    let revenue = 0;
    const newArr = arr.filter(x => revenue += x.revenue);
    return revenue;
};

const displayNumberOfUsersInFrance = (arr) => {
    let revenueNumber = 0;
    const newArr = arr.filter(x => {
        if (x.country === "France") {
            revenueNumber += 1;
        }
    });
    return revenueNumber;
};

const displayTurnoverSpreadOver4Countries = (arr) => {
    let revenue = 0;
    const newArr = arr.filter(x => {
        if (x.country === "France" || x.country === "Germany" || x.country === "United States" || x.country === "Great Britain") {
            revenue += x.revenue;
        }
    });
    return revenue;
};

const displayListOfCountriesEarnedMoney = (arr) => {
    let countryList = [];
    const newArr = arr.filter(x => {
        if (x.revenue > 0 && !countryList.includes(x.country)) {
            countryList.push(x.country);
        }
    });
    return countryList;
};

const display5UsersWhoMadeMostMoney = (arr) => {
    let revenue = 0;
    const newArr = arr.sort((a, b) => {
        return Number(b.revenue - a.revenue);
    }).slice(0, 5).map(x => `${x.firstName} ${x.lastName}`);
    return newArr;
};

const displayLargestGainsByGender = (arr) => {
    const male = __displayGainsByGender(arr, 'M');
    const female = __displayGainsByGender(arr, 'F');
    const diff = () => {
        if (male > female) return 'men';
        else if (male > female) return 'women';
        else return 'equality between men and women';
    }
    return diff();
};

const __displayGainsByGender = (arr, gender) => {
    let revenue = 0;
    const newArr = arr.filter(x => {
        if (x.sex === gender) {
            revenue += x.revenue;
        }
    });
    return revenue;
};

const displayUsersBrougthInAtLeast75Euros = (arr) => {
    let revenue = 0;
    const newArr = arr.filter((x) => x.revenue >= 75).map(x => `${x.firstName} ${x.lastName}`);
    return newArr;
};

const displayPercentageOfPayingCustomersAmongOurTop100Users = (arr) => {
    let revenueNumber = 0;
    const limit = 100;
    const newArr = arr.filter(x => {
        if (x.revenue > 0 && Number(x.id) <= limit) {
            revenueNumber += 1;
        }
    });
    return `${parseFloat((revenueNumber/limit)*100).toFixed(2)} %`;
};


console.log("chiffre d'affaires moyen par utilisateur :\n", displayAverageTurnover(users), "\n----------------------");
console.log("pourcentage d'utilisateurs ayant rapporté de l'argent (revenue supérieur à 0) :\n", displayPercentageOfMoneyUsers(users), "\n----------------------");
console.log("chiffre d'affaires moyen d'un utilisateur ayant rapporté de l'argent :\n", displayAverageRevenueOfMoneyUser(users), "\n----------------------");
console.log("gain d'argent total :\n", displayATotalMoneyGain(users), "\n----------------------");
console.log("nombre d'utilisateurs en France (parmi les utilisateurs en France) :\n", displayNumberOfUsersInFrance(users), "\n----------------------");
//console.log("nombre de clients payants en France :\n", displayNumberOfCustomersInFrance(users), "\n----------------------");
console.log("chiffre d'affaires réparti des 4 pays les plus représentés :\n", displayTurnoverSpreadOver4Countries(users), "\n----------------------");
console.log("liste des pays ayant gagnés de l'argent :\n", displayListOfCountriesEarnedMoney(users), "\n----------------------");
console.log("noms des 5 utilisateurs ayant rapporté le plus d'agent :\n", display5UsersWhoMadeMostMoney(users), "\n----------------------");
console.log("les gains les plus importants selon le sexe :\n", displayLargestGainsByGender(users), "\n----------------------");
console.log("utilisateurs ayant rapporté au moins 75€ :\n", displayUsersBrougthInAtLeast75Euros(users), "\n----------------------");
console.log("pourcentage des clients payants parmi nos 100 premiers utilisateurs :\n", displayPercentageOfPayingCustomersAmongOurTop100Users(users), "\n----------------------");
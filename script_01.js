const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

const displayFirstnamesLastnames = (arr) => {
    let newArr = [];
    return newArr = arr.map(x => x = { first: x.first, last: x.last });
};

const replaceBirthdateByAge = (arr) => {
    let newArr = [];
    let d = new Date();
    let year = Number(d.getFullYear());
    return newArr = arr.map(x => {
        let birthYear = Number(x.year);
        let age = year - birthYear;
        return x = { first: x.first, last: x.last, age: age };
    });
};

const replaceFirstKeysName = (arr) => {
    let newArr = [];
    return newArr = arr.map(x => x = { firstName: x.first, lastName: x.last, year: x.year });
};

const FilterByBirthdate = (arr) => {
    let newArr = [];
    return newArr = arr.filter(x => x.year >= 1970 && x.year <= 1979);
};

console.log('prénom et nom des entrepreneurs :\n', displayFirstnamesLastnames(entrepreneurs), '\n----------------------');
console.log('remplacement de la date de naissance par l\'âge de l\'entrepreneur qu\'il aurait aujourd\'hui :\n', replaceBirthdateByAge(entrepreneurs), '\n----------------------');
console.log('remplacement des clés "first" et "last" par "firstName" et "lastName" :\n', replaceFirstKeysName(entrepreneurs), '\n----------------------');
console.log('Filtrage des entrepreneurs nés dans les années 70 :\n', FilterByBirthdate(entrepreneurs), '\n----------------------');
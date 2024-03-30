let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
} ;

EUR = 1.07 ;

let fromEuroToDollar = function(eur) {
	return eur*oneEuroIs["USD"];
};
console.log (fromEuroToDollar(1));

let fromDollarToYen = (dollar) => {
    return (dollar/oneEuroIs["USD"]) * oneEuroIs["JPY"];
} ;
console.log (fromDollarToYen (4)) ;

let fromYenToPound = function (yen) {
    return (yen/oneEuroIs["JPY"]) * oneEuroIs["GBP"];
} ;

console.log(fromYenToPound (5)) ;

module.exports = {fromEuroToDollar,fromDollarToYen,fromYenToPound};
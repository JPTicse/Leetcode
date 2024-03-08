/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let kelvin = celsius + 273.15;
    let farenheit = celsius * 1.8 + 32;
    return [kelvin, farenheit];
};

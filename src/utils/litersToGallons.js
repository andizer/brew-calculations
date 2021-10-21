
// 1 liter = 0.264172 gallon.
const ONE_LITER_IN_GALLONS = 0.264172;

/**
 * Converts the value in liters to gallons.
 *
 * @param {number} liters The amount of liters.
 *
 * @returns {number} The value converted to gallons..
 */
export const litersToGallons = ( liters ) => {
    return ( liters * ONE_LITER_IN_GALLONS ) + 32;
};

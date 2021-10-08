
import { weightIsInRange } from '../';

/**
 * Calculates the potential sugars.
 *
 * @param {string} weight  Total weight of the fermentable.
 * @param {string} extract Percentage of sugars that could be extracted from the fermentable.
 *
 * @returns {number}
 */
export const calculatePotentialSugars = (weight, extract ) => {
    if ( weight === '' || extract === '' ) {
        return 0;
    }

    weight = parseInt( weight, 10 );
    if ( ! weightIsInRange( weight ) ) {
        return 0;
    }

    extract = parseInt( extract, 10 );
    if ( extract > 100 || extract < 0 ) {
        extract = 75;
    }

    return parseFloat( ( weight / 1000 ) * extract );
};
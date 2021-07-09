import {convertToFloat} from "./converToFloat";

/**
 * Converts the given value to a floating number.
 *
 * @param {string|Number} value The value to convert.
 *
 * @returns string The converted value.
 */

export const formatAsFloat = (value ) => {
    value = convertToFloat( value );

    if ( isNaN( value ) ) {
        return '';
    }

    return value;
};
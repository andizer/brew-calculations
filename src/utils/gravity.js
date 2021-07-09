import {formatAsFloat} from "./formatAsFloat";

/**
 * These are the gravity values that makes sense.
 *
 * @type {{min: number, max: number}}
 */
export const gravityRanges = {
    min: 980,
    max: 1150
};
export const validateGravity = ( gravity ) => {
    return ( gravity !== '' && gravityIsInRange( gravity ) );
};

export const gravityHasProgress = ( originalGravity, finalGravity ) => {
    return ( validateGravity( originalGravity ) && validateGravity( finalGravity ) && finalGravity < originalGravity  );
};

export const gravityIsInRange =( value ) => {
    return ( value >= gravityRanges.min && value <= gravityRanges.max );
};

/**
 * Gets the proper gravity points.
 *
 * @param {number} gravity The current gravity value.
 *
 * @returns {number} The proper gravity points value.
 */
export const getGravityPoints = ( gravity ) => {
    return gravity - 1000;
};


/**
 * Normalizes the given gravity value.
 *
 * @param {number|string} value The current value.
 *
 * @returns {number|string} The normalized value.
 */
export const normalizeGravity = ( value ) => {
    value = formatAsFloat( value );

    if( value === '' ) {
        return value;
    }

    if ( value < 1 || ( value - 1 ) < 1 ) {
        return value * 1000;
    }

    return value;
};

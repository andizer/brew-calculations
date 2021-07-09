/**
 * Formats the given value as percentage.
 *
 * @param result
 * @returns {string}
 */
export const formatPercentage = ( result ) => {
    if ( ! isNaN( result ) ) {
        return formatNumber( result ) + '%';
    }

    return '';
};
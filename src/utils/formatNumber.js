export const formatNumber = ( value ) => {
    return value.toLocaleString(
        'nl-NL',
        {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }
    );
};
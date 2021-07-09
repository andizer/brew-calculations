
export const convertToFloat = ( value ) => {
    return parseFloat( value.replace( ",", "." ) );
};
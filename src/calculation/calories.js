import {roundNumber} from "../utils";

/**
 * Calculates the calories based on the original and final gravity.
 *
 * @see https://brewgr.com/calculations/calories
 *
 * @param {number} originalGravity The original gravity.
 * @param {number} finalGravity    The final gravity.
 *
 * @returns {number} The total calories.
 */
export const calculateCalories = ( originalGravity, finalGravity ) => {
    const caloriesFromAlcohol = 1881.22 * finalGravity * (originalGravity - finalGravity) / (1.775 - originalGravity);
    const caloriesFromCarbs   = 3550.0 * finalGravity * ((0.1808 * originalGravity) + (0.8192 * finalGravity) - 1.0004);
    const totalCalories       = caloriesFromAlcohol + caloriesFromCarbs;

    return roundNumber( totalCalories );
}
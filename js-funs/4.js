// Create a function that calculates how many minutes have elapsed from midnight until right now.
// The function should still return an accurate answer,
// even if you ran it a few minutes or hours later.

// Input: Date()
// Output: number
// Get date, hold in date variable
// Get hours, hold in hours variable
// Convert hours to minutes, hold in minutesA variable
// Get minutes, hold in minutesB variable
// Add all minutes together
// Return minutes

function midnightToNow(time) {
    let date = new Date();
    let hours = date.getHours();
    let minutesA = hours * 60;
    let minutesB = date.getMinutes();
    return minutesA + minutesB;
 }

console.log(midnightToNow());
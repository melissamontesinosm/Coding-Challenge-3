// Task 1: Create a function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    let totalSales = salesFigures.reduce((total, sale)=> total + sale, 0);
    let averageSales = totalSales/salesFigures.length;

    return averageSales;
}
const salesFigures = [1111, 2222, 3333, 4444, 5555]; //Example Data 
console.log("Average Sales:", calculateAverageSales(salesFigures)); // Output: 16665


// Task 2: Create a Function to Determine Performance Rating
let averageSales = calculateAverageSales(sales);

function determinePerformanceRating(averageSales) {
    if (averageSales > 10000) {
        return "Excellent";
    } else if (averageSales >= 7000) {
        return "Good";
    } else if (averageSales >= 4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
} //Performance Rating based on Average Sales

console.log("Performance Rating:", determinePerformanceRating(averageSales)); 
  

// Task 3: Create a Function to Identify Top and Bottom Performers


// Task 1: Create a function to Calculate Average Sales
function calculateAverageSales(salesFigures) {
    let totalSales = salesFigures.reduce((total, sale)=> total + sale, 0);
    let averageSales = totalSales/salesFigures.length;

    return averageSales;
}
const salesFigures = [1111, 2222, 3333, 4444, 5555]; //Example Data 
console.log("Average Sales:", calculateAverageSales(salesFigures)); // Output: 3333


// Task 2: Create a Function to Determine Performance Rating
let averageSales = calculateAverageSales(salesFigures);

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

function findTopAndBottomPerformers(salespeople) {
   const Totalsales = salespeople.map(person => ({...person,
    TotalSalesSum: person.totalSales.reduce((acc,sale)=> acc + sale, 0)
   }));

   const maxSales = Math.max(...Totalsales.map(person => person.TotalSalesSum)); 
   const minSales = Math.min(...Totalsales.map(person => person.TotalSalesSum));

   const topPerformer = Totalsales.find(person => person.TotalSalesSum === maxSales);
   const bottomPerformer = Totalsales.find(person => person.TotalSalesSum === minSales);

       return {topPerformer,bottomPerformer};
   
}

// Data Set 1
const salespeople = [
    { name: 'Alice', totalSales: [12000, 15000, 13000] },    
    { name: 'Bob', totalSales: [7000, 6000, 7500] },
    { name: 'Charlie', totalSales: [3000, 4000, 3500] },
    { name: 'Diana', totalSales: [9000, 8500, 9200] },
];

const result = findTopAndBottomPerformers(salespeople);
console.log(result);

// Task 4: Combine Functions to Generate a Performance Report

function generatePerformanceReport(salesData) {
    const report = salesData.map(salespeople=> {
        const averageSales = calculateAverageSales (salespeople.salesFigures);
        const performanceRating= determinePerformanceRating(averageSales);
            return {
                name: salespeople.name,
                averageSales,
                performanceRating};
    });
    const topAndbottom = findTopAndBottomPerformers(salesData);

    return{
        report,
        topPerformer: topAndbottom.topPerformer,
        bottomPerformer: topAndbottom. bottomPerformer};
}

// Task 5: Test your Functions with Sample Data
const salesData= [
    { name: 'Alice', totalSales: [12000, 15000, 13000] },    
    { name: 'Bob', totalSales: [7000, 6000, 7500] },
    { name: 'Charlie', totalSales: [3000, 4000, 3500] },
    { name: 'Diana', totalSales: [9000, 8500, 9200] },
];
const performanceRating = generatePerformanceReport (salesData);
console.log("Performance Report:", performanceRating);



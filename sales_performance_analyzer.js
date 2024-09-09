// Task 1: Create a function to Calculate Average Sales

function calculateAverageSales(salesFigures) {
    let totalSales = salesFigures.reduce((total, sale)=> total + sale, 0);
    let averageSales = totalSales/salesFigures.length;

    return averageSales;
}
const salesFigures = [100, 200, 300, 400, 500]; //Example Data 
console.log(calculateAverageSales(salesFigures)); 


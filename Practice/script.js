/* if the uniformSet needs: ["hat", "glasses"]
  & the uniformPieces has: ["company1_hat", "company1_glasses", "company2_hat"]
  then company2 would be the one missing items from the full set.

  Return a string of the company name that is missing items, if a company isn't missing any items, please retun N/A
*/

const uniformSet = ["hat", "glasses"];
const uniformPieces = ["company1_hat", "company1_glasses", "company2_hat"];

let productArray = [];
let companyArray = [];

uniformPieces.forEach((product, index) => {
  if (product.split("_")[1] === uniformSet[index]) {
    productArray.push(product.split("_")[1]);
  } else {
    companyArray.push(product.split("_")[0]);
  }
});

if (companyArray.length) {
  console.log("hello");
}

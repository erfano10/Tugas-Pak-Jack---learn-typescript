/**
 * An online marketplace sells thousands of products every day. 
 * To display complete product information, the system stores a product code, product name, selling price, 
 * stock quantity, product weight, average customer rating, and whether the product is currently discounted.
 * 
 * Task:
 * 1. Define a proper type for the product information.
 * 2. Implement a type that you defined on 3 products data.
 * 
 * display the product data using console.log.
 */
// npm run example src/01-data-types/tasks/task-06.ts

interface product {
    produkCode: string
    productName: string
    price: string
    stockQuantity: number
    productWeight: string
    costumerRating: number
    currentlyDiscount: boolean

}

const product1: product = {
    produkCode: "PRD-001",
    productName: "Headphone Bluetooth Wireless",
    price: "35.000",
    stockQuantity: 12,
    productWeight: "300g",
    costumerRating: 4.5,
    currentlyDiscount: true

}

const product2: product = {
    produkCode: "PRD-002",
    productName: "Heandphone Oppo A12",
    price: "1.200.000",
    stockQuantity: 2,
    productWeight: "250g",
    costumerRating: 4.5,
    currentlyDiscount: false

}

const product3: product = {
    produkCode: "PRD-003",
    productName: "Tumbler Stainless",
    price: "600.000",
    stockQuantity: 15,
    productWeight: "500g",
    costumerRating: 4.3,
    currentlyDiscount: true

}

const productlist: product[] = [product1, product2, product3]
console.log(`=== task 06 ===`)
productlist.forEach((product, index) => {

    console.log(`\nProduck ke ${index + 1}`)
    console.log("Produk code :", product.produkCode)
    console.log("Produk name :", product.productName)
    console.log("price :", product.price)
    console.log("stock Quantity :", product.stockQuantity)
    console.log("Product Weight :", product.productWeight)
    console.log("costumer rating :", product.costumerRating)
    console.log("Discount :", product.currentlyDiscount ? "ada diskon" : "tidak ada diskon")


})
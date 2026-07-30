/**
 * An online shopping platform allows customers to purchase multiple products in one transaction. 
 * Every product added to the shopping cart stores the product code, product name, unit price, 
 * quantity purchased, and whether the product is eligible for free shipping.
 * Today, one customer added the following products to the cart.

| Product Code | Product Name        | Price   | Quantity | Free Shipping |
| ------------ | ------------------- | ------- | -------- | ------------- |
| KB001        | Mechanical Keyboard | 850000  | 1        | Yes           |
| MS002        | Wireless Mouse      | 275000  | 2        | Yes           |
| HD003        | External SSD 1TB    | 1650000 | 1        | No            |
| HP004        | Gaming Headset      | 720000  | 1        | Yes           |

 * Task:
 * 1. Define a proper type for the product information.
 * 2. Store the product data in a single collection.
 * 3. Display the product data using console.log.
 */

interface shoppingPlatform {
    productCode: string
    productName: string
    price: number
    Quantity: number
    FreeShipping: boolean
}

const shopppingPlatformList: shoppingPlatform[] = [
    { productCode: "KB001", productName: "Mechanical Keyboard", price: 850000, Quantity: 1, FreeShipping: true },
    { productCode: "MS002", productName: "Wireless Mouse", price: 275000, Quantity: 2, FreeShipping: true },
    { productCode: "HD003", productName: "External SSD 1TB", price: 1650000, Quantity: 1, FreeShipping: false },
    { productCode: "HP004", productName: " Gaming Headset", price: 720000, Quantity: 1, FreeShipping: true }
]

console.log(`---Task 10---`)
shopppingPlatformList.forEach((shopppingPlatform, index) => {
    console.log(`\nShopping Platform ke ${index + 1}`)
    console.log("Product Code :", shopppingPlatform.productCode)
    console.log("Product name :", shopppingPlatform.productName)
    console.log("Product Price :", shopppingPlatform.price)
    console.log("Quantity :", shopppingPlatform.Quantity)
    console.log("Free Shippping :", shopppingPlatform.FreeShipping ? "YES" : "NO")
})

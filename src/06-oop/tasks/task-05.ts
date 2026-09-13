/**
 * An e-commerce company wants to manage product inventory.
 * Each product has:
 * - Product ID
 * - Product name
 * - Price
 * - Stock quantity
 * For example:
 * Product
 * - ID: PRD001
 * - Name: Gaming Laptop
 * - Price: Rp15,000,000
 * - Stock: 20
 * The company wants to make sure product data cannot be changed carelessly.
 * 
 * The system needs to support:
 * - Increasing stock
 * - Decreasing stock
 * - Changing price
 * - Checking stock availability
 * - Calculating inventory value
 * 
 * Student Tasks
 * - Create class Product
 * - Private Properties, at minimum:
 *   * private price: number;
 *   * private stock: number;
 * 
 * - Other properties can be public or private depending on the student's design.
 * - Required Methods
 *   * addStock(quantity)
 *   * removeStock(quantity)
 *   * changePrice(newPrice)
 *   * isAvailable()
 *   * getInventoryValue()
 *   * showProductInfo()
 * 
 * - Business Rules
 * addStock(): quantity must be greater than 0.
 * removeStock(): quantity must be greater than 0 and not greater than current stock
 * changePrice(): new price must be greater than 0.
 * isAvailable(): returns true when stock > 0, otherwise false
 * getInventoryValue(): calculate price × stock
 */

import { cp } from "node:fs";

class Product {
    constructor(
        public productID: string,
        public productName: string,
        private price: number = 0,
        private stock: number = 0
    ) { }

    public addStock(quantity: number): void {
        if (quantity > 0) {
            this.stock += quantity
            console.log(`Stok ${this.productName} berhasil ditambah ${quantity}. Stok sekarang: ${this.stock}`);
        } else {
            console.log("Jumlah penambahan stok harus lebih dari 0!");
        }
    }
    public removeStock(quantity: number): void {
        if (quantity <= 0) {
            console.log(`Jumlah pengurangan barang harus lebih dari 0`)
        } else if (quantity > this.stock) {
            console.log(`Stock tidak mencukupi. stok sekarang ada : ${this.stock}`)
        } else {
            this.stock -= quantity
            console.log(`Stock ${this.productName} berhasil dikurangi ${quantity}. Stock sekarang : ${this.stock}`)
        }
    }
    public changePrice(newPrice: number): void {
        if (newPrice > 0) {
            this.price = newPrice
            console.log(`Harga ${this.productName} berhasil diubah menjadi Rp${newPrice}`)
        } else {
            console.log(`Harga harus lebih dari 0`)
        }
    }
    public isAvailable(): boolean {
        return this.stock > 0
    }
    public getInventoryValue(): number {
        return this.price * this.stock
    }
    public showProductInfo() : void {
        console.log(`ID Product : ${this.productID}`)
        console.log(`Name Product : ${this.productName}`)
        console.log(`Price Product : ${this.price}`)
        console.log(`Stock product : ${this.stock}`)
        console.log(`Is Available : ${this.isAvailable()}`)
        console.log(`Inventory Value : ${this.getInventoryValue()}`)
    }
}



const laptop = new Product(
    "PRD001",
    "Gaming Laptop",
    15000000,
    20
);

laptop.addStock(5);

laptop.removeStock(3);

laptop.changePrice(14500000);

console.log(laptop.isAvailable());

console.log(laptop.getInventoryValue());

laptop.showProductInfo()
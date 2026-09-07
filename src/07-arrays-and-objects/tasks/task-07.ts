/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completeOrder = orders.filter((o) => o.status === "completed")
    .map((order) => {
        let items: string[] = []
        order.items.forEach((element) => {    //fungsi forEach untuk mengakses setiap elemen di dalam struktur data
            items.push(element.product),
                (element.price), (element.quantity)
        })
        return {
            ...order,
            items
        }
    })

const orderWithTotal = orders.map((o) => {
    const totalValue = o.items.reduce((sum, item) => {
        return sum + item.price * item.quantity
    }, 0)
    return {
        id: o.id,
        customer: o.customer,
        status: o.status,
        totalValue: totalValue

    }
})
const completedOrdersWithTotal = orderWithTotal.filter(
    (o) => o.status === "completed"
);
const topSpenderSponsor = completedOrdersWithTotal.reduce((max, current) => {
    return current.totalValue > max.totalValue ? current : max
})

const totalRevenue = completedOrdersWithTotal.reduce((sum , order) => {
    return sum + order.totalValue
},0)

const purchasedProducts = orders
  .filter((o) => o.status === "completed")
  .flatMap((o) => o.items)
  .map((o)=> o.product)

const uniqueProduct = [...new Set(purchasedProducts)]
console.log(completeOrder)
console.log(orderWithTotal)
console.log(topSpenderSponsor)
console.log(totalRevenue)
console.log(uniqueProduct)
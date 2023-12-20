const container = document.querySelector('.product-cart')
const title = document.querySelector('.products-quantity-title')
const totalPrice = document.querySelector('.products-total-price')
const KEY = 'products added to cart'

import { fetchProducts} from './fetch.js'
import {createMarkupCart} from './template.js'

const products = JSON.parse(localStorage.getItem(KEY)) || []


container.insertAdjacentHTML('beforeend', createMarkupCart(products))

const productsQuantity = document.querySelectorAll('.products-quantity')

products.forEach((el, index) => {
    const quantity = el.quantity
    productsQuantity[index].textContent = quantity
})

title.textContent = `Cart(${products.length})`
const total = products.reduce((acc, el) => {
    console.log(el)
    return acc += el.quantity * el.price
},0)
totalPrice.textContent = `$${total}`


// const moreBtn = document.querySelectorAll('.more-btn')
// const lessBtn = document.querySelectorAll('.less-btn')


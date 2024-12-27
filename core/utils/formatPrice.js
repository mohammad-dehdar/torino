function formatPrice(price) {
    return new Intl.NumberFormat('fa-IR').format(price)
}

export default formatPrice;
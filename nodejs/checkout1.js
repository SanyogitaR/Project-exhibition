exports.checkout = (req, res) => {
    const { orderId, paymentInfo } = req.body;
    if (!orderId || !paymentInfo) return res.status(400).send('Missing fields');

    // Logic to handle payment (contact DB or payment gateway here).
    console.log('Order received:', orderId, paymentInfo);
    res.status(200).send('Payment successful');
};
exports.signup = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Missing fields');

    // Logic to send this data to the database (handled by your DB person).
    console.log('Signup data received:', username, password);
    res.status(201).send('User created');
};

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) return res.status(400).send('Missing fields');

    // Check credentials (placeholder logic here).
    console.log('Login data received:', username, password);
    res.status(200).send('User logged in');
};
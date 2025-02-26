const express = require('express');
const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3002;

app.post('/notify', (req, res) => {
    const { message } = req.body;
    console.log('Notification sent:', message);
    res.send('Notification sent!');
});

app.listen(PORT, () => {
    console.log(`Notification Service running on port ${PORT}`);
});
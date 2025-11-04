const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());


let feedbacks = [];


app.post('/feedback', (req, res) => {
    const { report } = req.body;
    
    if (!report) {
        return res.status(400).json({ 
            success: false, 
            message: 'Feedback is required' 
        });
    }

    
    const newFeedback = {
        id: Date.now(),
        feedback: report,
        timestamp: new Date().toISOString()
    };
    
    feedbacks.push(newFeedback);
    
    console.log('New feedback received:', newFeedback);
    
    res.json({ 
        success: true, 
        message: 'Thank you for your valuable feedback!',
        data: newFeedback
    });
});


app.get('/feedback', (req, res) => {
    res.json({ success: true, data: feedbacks });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



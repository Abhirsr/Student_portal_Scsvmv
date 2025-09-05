const express = require('express');
const bodyParser = require('body-parser');

const academicRoutes = require('./modules/academic/routes');
// const paymentsRoutes = require('./modules/payments/routes');
// const profileRoutes = require('./modules/profile/routes');
// const leaveRoutes = require('./modules/leave-requests/routes');
// const hostelRoutes = require('./modules/hostel/routes');
// const ticketsRoutes = require('./modules/tickets/routes');
// const chatbotRoutes = require('./modules/chatbot/routes');

const app = express();
app.use(bodyParser.json());

// Mount feature routers under /api
app.use('/api/academic', academicRoutes);
// app.use('/api/payments', paymentsRoutes);
// app.use('/api/profile', profileRoutes);
// app.use('/api/leave-requests', leaveRoutes);
// app.use('/api/hostel', hostelRoutes);
// app.use('/api/tickets', ticketsRoutes);
// app.use('/api/chatbot', chatbotRoutes);

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

module.exports = app;

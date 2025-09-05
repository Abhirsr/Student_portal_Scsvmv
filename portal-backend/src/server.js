const app = require('./app');
const config = require('../config');

const PORT = config.port || 3000;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running in ${config.env} mode on port ${PORT}`);
});

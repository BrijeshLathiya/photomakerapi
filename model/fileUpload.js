const multer = require('multer');

// Set storage engine for multer
const storage = multer.memoryStorage(); // Use memory storage (temporary storage in memory)
const upload = multer({ storage: storage });

module.exports = upload;

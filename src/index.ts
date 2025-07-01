import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Simple route
app.get('/', (req, res) => {
  console.log('Root endpoint accessed');
  res.json({ 
    message: 'Hello from vscode.dev test app!', 
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// Health check endpoint
app.get('/health', (req, res) => {
  console.log('Health check requested');
  res.json({ status: 'OK', uptime: process.uptime() });
});

// Simple calculation endpoint for testing debugging
app.get('/calculate/:num', (req, res) => {
  const num = parseInt(req.params.num);
  
  if (isNaN(num)) {
    return res.status(400).json({ error: 'Invalid number provided' });
  }
  
  const result = calculateSquare(num);
  console.log(`Calculated square of ${num} = ${result}`);
  
  res.json({ 
    input: num, 
    square: result,
    isPrime: isPrime(num)
  });
});

function calculateSquare(n: number): number {
  return n * n;
}

function isPrime(n: number): boolean {
  if (n < 2) return false;
  if (n === 2) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📍 Access at: http://localhost:${PORT}`);
  console.log(`🔍 Health check: http://localhost:${PORT}/health`);
  console.log(`🧮 Calculate example: http://localhost:${PORT}/calculate/7`);
});

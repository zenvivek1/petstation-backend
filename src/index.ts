import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Route imports
import authRoutes from './routes/auth';
import petRoutes from './routes/pets';
import healthRoutes from './routes/health';
import medicationRoutes from './routes/medications';
import foodRoutes from './routes/food';
import vetRoutes from './routes/vets';
import calendarRoutes from './routes/calendar';

const app = express();
const PORT = process.env.PORT || 5000;

// 1. ABSOLUTE TOP LOGGER (Before everything else)
app.use((req, _res, next) => {
  const timestamp = new Date().toLocaleTimeString();
  console.error(`\n🔔 [${timestamp}] Incoming: ${req.method} ${req.url}`);
  next();
});

// 2. CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:8080',
  credentials: true,
}));

app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(morgan('dev'));
// Custom body logger for development
if (process.env.NODE_ENV !== 'production') {
  app.use((req, _res, next) => {
    if (req.method !== 'GET' && Object.keys(req.body).length > 0) {
      console.log('📦 Request Body:', JSON.stringify(req.body, null, 2));
    }
    next();
  });
}

// ─── Health check ─────────────────────────────────────────────────────────────
app.get('/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// ─── Uncaught Error Protection ──────────────────────────────────────────────
process.on('unhandledRejection', (reason, promise) => {
  console.error('😱 Unhandled Rejection at:', promise, 'reason:', reason);
  // In production, you might want to restart the service or notify a logger
});

process.on('uncaughtException', (err) => {
  console.error('🔥 Uncaught Exception:', err);
  // Important: Clean up and exit if critical
  process.exit(1);
});

// ─── API Routes ───────────────────────────────────────────────────────────────
app.use('/api/auth', authRoutes);
app.use('/api/pets', petRoutes);
app.use('/api/health', healthRoutes);
app.use('/api/medications', medicationRoutes);
app.use('/api/food', foodRoutes);
app.use('/api/vets', vetRoutes);
app.use('/api/calendar', calendarRoutes);

// ─── 404 Handler ─────────────────────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: 'Route not found.' });
});

// ─── Global error handler ────────────────────────────────────────────────────
app.use((err: any, req: express.Request, res: express.Response, _next: express.NextFunction) => {
  const timestamp = new Date().toISOString();
  console.error(`❌ [${timestamp}] ERROR in ${req.method} ${req.url}:`, err.stack || err.message || err);
  
  const status = err.status || err.statusCode || 500;
  res.status(status).json({ 
    error: process.env.NODE_ENV === 'production' ? 'Internal server error.' : (err.message || 'Internal server error.'),
    status
  });
});

// ─── Bootstrap ───────────────────────────────────────────────────────────────
const startServer = async () => {
  try {
    // Import and test connection
    const { default: prisma } = await import('./lib/prisma');
    await prisma.$connect();
    console.log('✅ [DB] Connected to Supabase PostgreSQL');

    app.listen(PORT, () => {
      console.log(`\n🚀 [${new Date().toLocaleTimeString()}] PetStation API LIVE`);
      console.log(`📍 URL: http://localhost:${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });
  } catch (error: any) {
    console.error('❌ Critical failure during startup:', error.message);
    process.exit(1);
  }
};

startServer();

export default app;

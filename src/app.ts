import express from 'express';
import 'express-async-errors';
import errorHandler from './middlewares/error';
import router from './Routes/CarRoute';

const app = express();
app.use(express.json());
app.use(errorHandler);
app.use(router);

export default app;

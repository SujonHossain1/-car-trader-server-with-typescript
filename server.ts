import cors from 'cors';
import express, { Application } from 'express';
import mongoose from 'mongoose';
import routes from 'routes';

const app: Application = express();

/** Middlewares */
const middlewares = [
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
];
app.use(middlewares);

app.use('/api', routes);
app.use('/', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

/** Server Configuration */
const PORT = process.env.PORT || 4000;
const NODE_ENV = process.env.NODE_ENV || 'development';
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} in ${NODE_ENV} mode`);

    if (NODE_ENV === 'development') {
        mongoose
            .connect('mongodb://localhost:27017/car-trader')
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch((err) => console.log(err));
    }
});

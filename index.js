import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileupload from 'express-fileupload';
import { env } from 'process';

const app = express();

const port = 5000;
const DB_URL = env.EXPRESS_BASIC;

app.use(fileupload({}));
app.use(express.json());
app.use(express.static('static'));
app.use('/api', router);

const startApp = async () => {
	try {
		await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true });
	} catch(e) {
		console.log(e);
	}
};

startApp();

app.listen(5000, () => console.log(`Server started on port ${port}`));

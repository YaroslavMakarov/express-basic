import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import fileupload from 'express-fileupload';

const app = express();

const port = 5000;
const DB_URL = `mongodb+srv://Yaroslav_Makarov:Rosqzuzs@cluster0.wnou1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

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
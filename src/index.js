const express = require('express');
const morgan = require('morgan');
const app = express();
const { savePlayer } = require('./scriptSavePlayer')
//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}))
app.use(express.json());

//routes
app.use('/api/v1', require('./routes/players'));
savePlayer;

app.listen(app.get('port'), () => console.log(`server on port ${app.get('port')}`));

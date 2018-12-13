// Launch the dev REST server
const app = require('express')();

app.use(require('body-parser').json());

app.post('/metrics', (req, res) => {
	console.log(req.body);
	return res.status(200).end();
});

const serverPort = 4201;
app.listen(serverPort, () => console.log(`Metrics logging server running on port: ${serverPort}`));

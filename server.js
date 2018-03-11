const path = require('path');
const express = require('express');
const http = require('http');
const webpack = require('webpack');
const config = require('./webpack.config');

const compiler = webpack(config);
const app = express();
const server = http.createServer(app);

const host = 'http://localhost';
const port = process.env.npm_package_config_port ? process.env.npm_package_config_port : 8080;
console.log("PORT", process.env.npm_package_config_port);//will be undefined because ? :)

app.use(express.static(path.join('css')));
app.use(express.static(path.join('js')));
app.use('/assets', express.static(path.join(__dirname, './assets')));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, './', 'index.html'));
});

app.use("/process", (req, res)=>{
	res.send("<div>process.env on console</div><script>console.log("+JSON.stringify(process.env)+");</script>");
});

server.listen(port);
server.on('listening', (err) => {
	if (err) {
		console.log(err);
		return;
	}
	console.info('==> Listening on port %s. Open up %s:%s/ in your browser.', port, host, port);
});

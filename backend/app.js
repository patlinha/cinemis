const port = 3000
const HttpSetup = require('./http-setup')

new HttpSetup(port).initServer(port)

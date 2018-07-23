// Simple util for writing basic auth configs with Netlify.

const fs = require("fs");

const data = `${process.env.BASIC_AUTH_PATH}/
	Basic-Auth: ${process.env.BASIC_AUTH_USER}:${process.env.BASIC_AUTH_PASSWORD}`;

fs.writeFileSync("dist/_headers", data);

/*eslint-disable no-console */
console.log("_headers written to dist/");
console.log(data);
/*eslint-enable no-console */

const { Client } = require("@notionhq/client");
const { NOTION_KEY, NOTION_DB } = process.env;
// Initializing a client
const notion = new Client({ auth: NOTION_KEY });

exports.handler = async function (event, context) {
	try {
		const response = await notion.databases.query({
			database_id: NOTION_DB,
			filter: {
				property: "Status",
				status: {
					equals: "Done",
				},
			},
		});
		return {
			statusCode: 200,
			body: JSON.stringify(response),
		};
	} catch (err) {
		console.error(err);
		return {
			statusCode: 500,
			body: JSON.stringify({ msg: err.message }),
		};
	}
};

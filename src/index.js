/**
 * This is the boilerplate repository for creating Twilio Joules which can be used as a webhook.
 */

/*
 * The handler function for all API endpoints.
 * The `event` argument contains all input values.
 *    event.httpMethod, The HTTP method (GET, POST, PUT, etc)
 *    event.{pathParam}, Path parameters as defined in your .joule.yml
 *    event.{queryStringParam}, Query string parameters as defined in your .joule.yml
 */
var Response = require('joule-node-response');

exports.handler = function(event, context) {
	var response = new Response();
	response.setContext(context)
	response.setContentType('application/xml');
  if(typeof(event.post['Body']) === "undefined") {
		response.setHttpStatusCode(400);
    response.send('<error>No Body passed in</error>');
    return;
  }
  response.send("<Response><Sms>"+event.post['Body']+"</Sms></Response>");
};

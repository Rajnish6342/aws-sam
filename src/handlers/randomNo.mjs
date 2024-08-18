
export const randomNo = async (event, context) => {
    console.info('context:', context);
    console.info('received:', event);
   
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        result: new Date().getTime(),
        randomNo: Math.random()
      })
    };
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
  }
  
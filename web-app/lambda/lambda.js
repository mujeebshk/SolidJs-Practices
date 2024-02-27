// let empolyee = {
//   firstName: "Abdul",
//   lastName: "Mujeeb",
//   Age: 20,
// };
// exports.handler = async (event) => {
//   console.log("Lambda Function");
//   if (event.httpMethod === "GET") {
//     return getRecord(event);
//   }
//   if (event.httpMethod === "POST") {
//     return createRecord(event);
//   }
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify("Api Gateway & Lambda"),
//   };
//   return response;
// };
// function getRecord(event) {
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       empolyee_details: empolyee,
//     }),
//   };
//   return response;
// }
// function createRecord(event) {
//   const body = JSON.parse(event.body);
//   const response = {
//     statusCode: 200,
//     body: JSON.stringify({
//       message: "Successfully Deleted",
//       details: body,
//     }),
//   };
//   return response;
// }

// const handler = async (api) => {
//   console.log("Event: ", api);

//   let respMsg = [
//     "Make Time: How to Focus on what Matters Every Day",
//     "The Power Of Habit",
//     "Wings of Fire",
//     "Beauty of Life",
//   ];
//   return {
//     statusCode: 200,
//     headers: {
//       "Content-Type": "application/json",
//       "Access-Control-Allow-Origin": "*",
//       "Access-Control-Allow-Headers": "Content-Type",
//       "Access-Control-Allow-Methods": "*",
//     },
//     body: JSON.stringify({
//       message: respMsg,
//     }),
//   };
// };
// export default handler;

// Lambda function code

module.exports.handler = async (event) => {
  console.log("Event: ", event);
  // let responseMessage = "Hello, World!";
  // if (event.queryStringParameters && event.queryStringParameters["Name"]) {
  //   responseMessage = "Hello, " + event.queryStringParameters["Name"] + "!";
  // }
  let responseMessage = [
    "The Power of Now",
    "Zero to One",
    "Mindset",
    "Rich Dad Poor Dad",
    "Clean Code",
    "Clean Architecture",
  ];
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type",
      "Access-Control-Allow-Methods": "*",
    },
    body: JSON.stringify({
      message: responseMessage,
    }),
  };
};

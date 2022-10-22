
 const assert = require("assert");
 const mockFactory = require("./common/mockFactory");
 
 const top10Airports = require("./common/testAirports");
 const requireUncached = require("./common/requireUncached");
 const jsFile = __dirname + "/../../apiproxy/resources/jsc/airportByCode.js";
 
 describe("Hello World Response", function () {
 
   describe("Say Hello World", function () {
     it("should return a 200 error code", function () {
       const mocks = mockFactory.getMock();
       mocks.contextGetVariableMethod
         .withArgs("response.content")
         .returns(JSON.stringify(top10Airports));
       mocks.contextGetVariableMethod
         .withArgs("proxy.pathsuffix")
         .returns("/hello-world");
 
       let errorThrown = false;
       try {
         requireUncached(jsFile);
       } catch (e) {
         console.error(e);
         errorThrown = true;
       }
       assert(errorThrown === false, "ran without error");
 
       assert(
         mocks.contextSetVariableMethod.calledWith("response.status.code", 200),
         "response.status.code set to 200"
       );
     });
   });
 });
 
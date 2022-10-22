
 const assert = require("assert");
 const mockFactory = require("./common/mockFactory");
 
 const requireUncached = require("./common/requireUncached");
 
 describe("Hello World Response", function () {
 
   describe("Say Hello World", function () {
     it("should return a 200 error code", function () {
       const mocks = mockFactory.getMock();
       mocks.contextGetVariableMethod
         .withArgs("proxy.pathsuffix")
         .returns("/hello-world");
 
 
       assert(
         mocks.contextSetVariableMethod.calledWith("response.status.code", 200),
         "response.status.code set to 200"
       );
     });
   });
 });
 
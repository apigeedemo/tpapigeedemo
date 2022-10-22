Feature: Say Hello World
  As an API consumer
  I want to get hello world said to me
  So that I can feel better about myself.

  Scenario: I should be able to get hello world said to me
    When I GET /hello-world
    Then response code should be 200
    And response body should be of type string

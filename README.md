Testing of open Rijksmuseum API using Cypress test framework for testing API requests. The CI pipeline is built using the circle CI.

Test Scenarios covered:

# 1) Visit rijksmuseum websit

# 2) Get API Collection

  -> WHEN no api key THEN status IS 401
  
  -> WHEN api key present THEN status IS 200
  
  -> WHEN api key and Involved maker present THEN body is not empty
  
  -> WHEN api key and Involved maker present THEN element number is 3618
  
# 3) Get API collection - object details

  -> WHEN art object number present and also api key THEN status IS 200
  
  -> WHEN art object number present and key is present its details like title , Object number are present

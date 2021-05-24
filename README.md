# auth-microservice

HTTP status codes: [here](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

```
                    Auth service
                      ^
                      | trimit la ruta de autorizare tokenul primit
                      | 
                      | primesc id-ul user-ului
        request       |           
Client --------> Measurements
        token
```


- inregistrare/logare/stergere utilizator
- autorizare token

- ruta pentru testare?

## Security section is composed from:
- passwords - interaction with passwords
- jwt - interaction with jwt tokens

For a better understanding of jwt token check www.jwt.io.

Jwt subdirectory contains:

- filters - middlewares for routes
- token - for signing and decoding
- models - what i am working with. For a better understanding of the code


## STRUCTURE ---> IMPORTANT
The Bearer Token contains data about userId and serialNumber.

Register
-
When a user try to register, he must provide a serialNumber(which is a hardware address). If the serialNumber exists in hwaddress table from database, then the account will be created.

Login
-
On login, credentials are username and password. Next, the crederentials are verified in database and if they are correct, the server returns a token.

Authorize
- 
For authorization, the request contains a Bearer token. This token contains userId and serialNumber. If the serialNumber from the token is the same as serialNumber extracted from database, this means that the user has access to the data. The expiration date is verified.

Refresh
- 
Same as authorization, but without verifying the expiration of the token.


## Details about connecting docker containers
https://www.tutorialworks.com/container-networking/

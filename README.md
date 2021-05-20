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

Security section is composed from:
- passwords - interaction with passwords
- jwt - interaction with jwt tokens

For a better understanding of jwt token check www.jwt.io.

Jwt subdirectory contains:

- filters - middlewares for routes
- token - for signing and decoding
- models - what i am working with. For a better understanding of the code

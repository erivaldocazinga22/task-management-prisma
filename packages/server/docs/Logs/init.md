# Sistema de Logs 

### Tecnologias:
 1. morgan - Para lidar com os logs;
 2. winston - Para mostrar os logs no conlose da API;

### Storage
Os logs são armazenados em um arquivo access.log dentro do directorio "logs/", na pasta rais da API.

### Formato dos logs

```bash
   2024-08-10 20:19:15 info: GET /api/tasks/606c6e21-d32e-41da-b7bf-7d7c2d0de52d 200 24.812 ms - 239
```
## INSTRUÇÕES
### Sincronizar Storage
Para sincronizar os diretórios, execute:

```bash
    yarn storage:link   # (se estiver usando Yarn)
    npm run storage:link   # (se estiver usando npm)
```

> Nota: Esse comando roda o arquivo **"link-storage.js"** no directorio **"bin"** na raiz do projecto, para sincronizar os arquivos da pasta *[storage-origem](./src/core/storage/)* e a *[storage-remote](./public/storage/)*
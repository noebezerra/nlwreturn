## NLW Return

Build docker `Dockerfile`

```
$ docker build . -t <nome>/<tag>
```

Renomei o arquivo `start.sh` com base na imagem docker `<nome>/<tag>`

```
$ ./start.sh
```

Entre no container e instale as dependĂȘncias

```
$ npm install
```

Execute

```
$ npm run dev
```

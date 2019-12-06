# krop-hakaton-2019
Medical service for the Krop City

https://onix-systems-krop-hakaton-2019.staging.onix.ua/

## Development
Set up project localy with ``Docker`` and  ``docker-compose``.

Up containers: (server will start on ``localhost:8080``)
```
docker-compose up -d
```

Down containers:
```
docker-compose down
```

Schell access into ``web`` container:
```
docker-compose exec -u 1000 web bash
```

Build production frontend build:
```
docker-compose exec -u 1000 web npm run prod
```

Build development frontend build:
```
docker-compose exec -u 1000 web npm run dev
```

Start frontend development server on ``localhost:3000``:
```
docker-compose exec -u 1000 web npm run watch
```
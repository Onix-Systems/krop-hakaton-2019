# krop-hakaton-2019
Medical service for the Krop City

https://onix-systems-krop-hakaton-2019.staging.onix.ua/

## Local project setup

Set up project locally with `docker` and  `docker-compose`.

1. Clone project
```shell script
git clone https://github.com/Onix-Systems/krop-hakaton-2019.git && krop-hakaton-2019
```

2. Start docker containers
```shell script
docker-compose up -d
```

3. Create development database for project
```shell script
docker-compose exec database createdb -U postgres medical_service
```

4. Set correct rights for project folders
```shell script
docker-compose exec web chown www-data:user -R bootstrap/cache
docker-compose exec web chown www-data:user -R storage
```

5. Go inside `web` container (all following commands should be executed inside container)
```shell script
docker-compose exec -u user web bash
```

6. Install composer dependencies
```shell script
composer install
```

7. Prepare correct `.env` file
```shell script
cp .env.example .env
php artisan key:generate
```

8. Set up credentials for database in `.env` file
```shell script
DB_HOST=database
DB_DATABASE=medical_service
DB_USERNAME=postgres
DB_PASSWORD=secret
```

9. Run database migrations and seeders
```shell script
composer dump-autoload
php artisan migrate
php artisan db:seed --class=AdminTablesSeeder
```

10. Create new admin user
```shell script
php artisan admin:create-user
```

11. Install npm dependencies
```shell script
npm install
```

12. Build frontend
```shell script
npm run prod
```

## Development

Server available on `localhost:8080`

Shell access into ``web`` container:
```shell script
docker-compose exec -u 1000 web bash
```

Build production frontend build:
```shell script
docker-compose exec -u 1000 web npm run prod
npm run prod # inside container
```

Build development frontend build:
```shell script
docker-compose exec -u 1000 web npm run dev
npm run dev # inside container
```

Start frontend development server on `localhost:3000`:
```shell script
docker-compose exec -u 1000 web npm run watch
npm run watch # inside container
```

## Deployment to shared hosting
1. Connect to server via ssh

2. Clone project
```shell script
git clone https://github.com/Onix-Systems/krop-hakaton-2019.git medical-services
```

3. Change `public path` for Laravel
```shell script
cp medical-services/shared-hosting-deploy/index.php medical-services/src/public/index.php
cp medical-services/shared-hosting-deploy/AppServiceProvider.php medical-services/src/app/Providers/
```

4. Copy Laravel's public directory to `public_html`
```shell script
cp -r medical-services/src/public/* public_html/
cp medical-services/src/public/.htaccess public_html/
```

5. Go to Laravel directory
```shell script
cd medical-services/src/
```

6. Install composer dependencies
```shell script
composer install
```

7. Prepare correct `.env` file
```shell script
cp .env.example .env
php artisan key:generate
```

8. Set up credentials for database in `.env` file

9. Run database migrations and seeders
```shell script
composer dump-autoload
php artisan migrate
php artisan db:seed --class=AdminTablesSeeder
```

10. Create new admin user
```shell script
php artisan admin:create-user
```

11. Build frontend locally (or wherever you want). Node required
```shell script
npm install
npm run prod
```

12. Pack frontend assets into tar archive and upload to `public_html` directory
```shell script
tar -czvf frontend.tar.gz css/ fonts/ images/ js/ mix-manifest.json 
```

13. Extract frontend assets from archive
```shell script
tar -xzvf frontend.tar.gz && rm frontend.tar.gz
```
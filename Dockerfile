FROM chialab/php:7.2-apache

COPY ./src /var/www/html
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html

RUN chown www-data:www-data -R bootstrap/cache \
 && chown www-data:www-data -R storage

# install node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get install nodejs -y

# install dependencies, run db migrations build frontend
RUN composer install --no-dev --optimize-autoloader
RUN php artisan migrate --force --step
RUN npm install
RUN npm run prod

EXPOSE 80

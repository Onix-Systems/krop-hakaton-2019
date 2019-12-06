FROM chialab/php:7.2-apache

COPY ./src /var/www/html
COPY ./apache.conf /etc/apache2/sites-available/000-default.conf

WORKDIR /var/www/html

RUN chown www-data:www-data -R bootstrap/cache \
 && chown www-data:www-data -R storage

RUN composer install

EXPOSE 80

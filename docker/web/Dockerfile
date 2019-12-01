FROM chialab/php-dev:7.2-apache

# create non-root user
RUN useradd --create-home --shell /bin/bash --uid 1000 user

# install node
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash -
RUN apt-get update && apt-get install nodejs -y

# create cache directories for composer and npm
RUN mkdir /.composer && chmod 777 -R /.composer
RUN mkdir /.npm && chmod 777 -R /.npm

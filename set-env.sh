#!#bin#sh

cd src
cp .env.example .env

sed -i "s#APP_ENV=.*#APP_ENV=production#"  .env
sed -i "s#APP_KEY=.*#APP_KEY=$APP_KEY#"    .env
sed -i "s#APP_DEBUG=.*#APP_DEBUG=false#"   .env
sed -i "s#APP_URL=.*#APP_URL=$APP_URL#"    .env

sed -i "s#DB_CONNECTION=.*#DB_CONNECTION=pgsql#"    .env
sed -i "s#DB_HOST=.*#DB_HOST=$DB_HOST#"             .env
sed -i "s#DB_PORT=.*#DB_PORT=5432#"                 .env
sed -i "s#DB_DATABASE=.*#DB_DATABASE=$DB_DATABASE#" .env
sed -i "s#DB_USERNAME=.*#DB_USERNAME=$DB_USERNAME#" .env
sed -i "s#DB_PASSWORD=.*#DB_PASSWORD=$DB_PASSWORD#" .env

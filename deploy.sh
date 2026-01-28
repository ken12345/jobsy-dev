Hostinger

db: u929529483_jobsy
user: u929529483_kenjobsy
password: 1nd3p3nd3ntJ0bs

cpanel password: 1nd3p3nd3nT-prodigy

server: https://developers.hostinger.com

wGMUwkwNGJHv2ysFIHxKaITaYGii5ge2SDoSWO5q84f3002f


curl -X GET "https://developers.hostinger.com/api/vps/v1/virtual-machines" \
-H "Authorization: Bearer wGMUwkwNGJHv2ysFIHxKaITaYGii5ge2SDoSWO5q84f3002f" \
-H "Content-Type: application/json"

public ip: 72.61.119.52

to connect: ssh root@72.61.119.52


sudo usermod -a -G your_user www-data

sudo chmod g+x /home/your_user





set -e

# Load NVM
export NVM_DIR="/root/.nvm"
source "$NVM_DIR/nvm.sh"

# Force Node version
nvm use 24

# Fix PATH explicitly
export PATH="$NVM_DIR/versions/node/v24.13.0/bin:$PATH"

NODE=$(which node)
NPM=$(which npm)

echo "Node path: $NODE"
echo "NPM path: $NPM"

cd /root/apps/jobsy-dev

echo "Pulling latest code..."
git pull origin main

echo "Installing dependencies..."
$NPM install

echo "Building project..."
$NPM run build

echo "Build complete."

echo "Clearing /var/www/jobsy..."
rm -rf /var/www/jobsy/*

echo "Deploying new build..."
cp -r dist/* /var/www/jobsy/

chown -R www-data:www-data /var/www/jobsy
chmod -R 755 /var/www/jobsy

echo "Deployment finished successfully."


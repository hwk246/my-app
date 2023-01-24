echo "switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server"
scp -r build/* pi@192.168.2.28:/var/www/html/

echo "Done!.."
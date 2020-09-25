p=$PWD
let i=${#p}-7
curDir=$(echo "$p" | cut -c$i-)
if [ "$curDir" = "/scripts" ]; then 
	cd ../
	echo "up directory"
fi

p=$PWD/www/index.html
if [ ! -f "$p" ]; then 
	echo "build does not exist, run 'npm run build' to make a build in project directory"
	npm run build
else
	platP=$PWD/platforms/android
	if [ ! -d "$platP" ]; then
		cordova platform add android
	fi
fi
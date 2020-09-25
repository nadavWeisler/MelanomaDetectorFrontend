p=$PWD
let i=${#p}-7
curDir=$(echo "$p" | cut -c$i-)
if [ "$curDir" = "/scripts" ]; then 
cd ../
echo "up directory"
fi

rm -r ./www/*
mkdir www
cp -r ./build/* ./www
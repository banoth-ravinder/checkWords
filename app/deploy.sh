#!/bin/sh 
cd [location of react app] 
echo “cleaning the cache …” 
npm cache clean --force

echo “Building React Project …” 
npm run build 

echo “Copying html file …” 
cp -r build html 

echo “Connecting to AWS VM and copying file to /var/www/html/ …” 
scp -i [location of .pem file] -r html ubuntu@ec2-XX-XXX-XXX-XXX.compute-1.amazonaws.com:/var/www 

echo “Removing html file from local directory …” 
rm -r html
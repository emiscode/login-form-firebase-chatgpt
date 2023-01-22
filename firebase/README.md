# Instructions

To build the image, navigate to the directory containing the Dockerfile and run the following command:

`docker build -t my-app .`

This will create an image named "my-app" that contains your static project files. You can then run the image with the following command:

`docker run -p 80:80 my-app`

This will run the image and map port 80 in the container to port 80 on the host machine, so the application will be accessible at http://localhost:80

![Demo](demo.png)

FROM nginx:alpine

# Copy files
COPY . /usr/share/nginx/html

# Set working directory
WORKDIR /usr/share/nginx/html

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]

# Dockerfile
FROM node:18-alpine

# Carpeta de trabajo dentro del contenedor
WORKDIR /app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias
RUN npm install

# Copiamos todo el código al contenedor
COPY . .

# Expone el puerto que utilizará el backend
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]

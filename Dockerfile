# Se usa la imagen base de Node.js
FROM node:18-alpine

# Se Establece el directorio de trabajo dentro del contenedor
WORKDIR /src

# Copia los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia el resto del código de la aplicación
COPY . .

# Copia el archivo .env
COPY .env .

# Expone el puerto en el que la API escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

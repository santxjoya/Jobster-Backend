# Usar una imagen base de Node.js
FROM node:18-alpine

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos de configuración del proyecto
COPY package.json package-lock.json ./

# Instalar las dependencias del proyecto
RUN npm install

# Copiar el resto del código de la aplicación
COPY . .

# Copiar el archivo .env (si lo usas)
COPY .env .

# Exponer el puerto en el que la API escucha
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "start"]

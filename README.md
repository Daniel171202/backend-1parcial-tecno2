# Daniel Aldazosa Miranda

# Backend con Node.js, Express y MongoDB (Dockerized)

Este proyecto es un backend que gestiona dos colecciones: **Usuarios** y **Productos** en la base de datos **Sample**. Implementa todas las funcionalidades requeridas por la consigna, incluyendo:

- Operaciones CRUD completas para ambas colecciones
- Un middleware para contar las operaciones realizadas
- Endpoints para consultar el número de documentos en cada colección
- Contador del total de operaciones realizadas

## Requisitos

- Docker y Docker Compose instalados localmente
- Postman o Insomnia (para probar los endpoints)

## Configuración del Entorno

1. **Clona** este repositorio:
   ```bash
   git clone https://github.com/usuario/mi-backend.git
   cd mi-backend
   ```

2. (Opcional) **Configura** un archivo `.env` en la raíz, si deseas personalizar las variables de entorno:
   ```
   MONGO_URI=mongodb://mongo:27017/sample
   PORT=3000
   ```

## Ejecución con Docker Compose

1. **Construir e iniciar** los contenedores:
   ```bash
   docker-compose up -d
   ```
   * `-d` ejecuta los contenedores en segundo plano.
   * El servicio **mongo** se levantará primero y luego **backend**.

2. **Verifica** que los contenedores estén en ejecución:
   ```bash
   docker-compose ps
   ```
   Deberías ver algo como:
   ```
   Name                    Command                  State                 Ports
   ----------------------------------------------------------------------------------
   sample-mongo   docker-entrypoint.sh mongod   Up      0.0.0.0:27017->27017/tcp
   sample-backend docker-entrypoint.sh npm s    Up      0.0.0.0:3000->3000/tcp
   ```

3. **Probar la aplicación**:
   * Abre Postman, Insomnia o tu cliente REST preferido
   * La API está disponible en `http://localhost:3000`

## Endpoints Disponibles

### Usuarios
* `GET /usuarios` - Obtener todos los usuarios
* `GET /usuarios/:id` - Obtener un usuario por ID
* `POST /usuarios` - Crear un nuevo usuario
  ```json
  {
    "nombre": "Juan Pérez",
    "email": "juan@ejemplo.com",
    "edad": 30
  }
  ```
* `PUT /usuarios/:id` - Actualizar usuario por ID
* `DELETE /usuarios/:id` - Eliminar usuario por ID

### Productos
* `GET /productos` - Obtener todos los productos
* `GET /productos/:id` - Obtener un producto por ID
* `POST /productos` - Crear un nuevo producto
  ```json
  {
    "nombre": "Smartphone XYZ",
    "precio": 599.99,
    "stock": 50,
    "categoria": "Electrónica"
  }
  ```
* `PUT /productos/:id` - Actualizar producto por ID
* `DELETE /productos/:id` - Eliminar producto por ID

### Contadores y Estadísticas
* `GET /contadores` - Obtiene el número de documentos en cada colección
* `GET /operaciones` - Obtiene la cantidad total de operaciones realizadas

## Comandos Útiles

1. **Ver logs** de la aplicación:
   ```bash
   docker-compose logs -f backend
   ```

2. **Detener los contenedores**:
   ```bash
   docker-compose down
   ```

3. **Detener y eliminar volúmenes** (borra los datos de MongoDB):
   ```bash
   docker-compose down -v
   ```

## Estructura de Carpetas

```
.
├── src/
│   ├── config/
│   │   └── db.js                  # Configuración de conexión a MongoDB
│   ├── controllers/
│   │   ├── productoController.js  # Controladores para productos
│   │   └── usuarioController.js   # Controladores para usuarios
│   │   └── contadorController.js  # Controladores para contadores
│   ├── middlewares/
│   │   └── contadorMiddleware.js  # Middleware para contar operaciones
│   ├── models/
│   │   ├── Contador.js            # Modelo para el contador de operaciones
│   │   ├── Producto.js            # Modelo de producto
│   │   └── Usuario.js             # Modelo de usuario
│   ├── routes/
│   │   ├── productoRoutes.js      # Rutas para productos
│   │   ├── usuarioRoutes.js       # Rutas para usuarios
│   │   └── contadorRoutes.js      # Rutas para contadores
│   └── app.js                     # Punto de entrada de la aplicación
├── Dockerfile                     # Configuración de imagen Docker
├── docker-compose.yml             # Configuración de servicios
├── .env                           # Variables de entorno (opcional)
├── package.json                   # Dependencias y scripts
├── package-lock.json              # Versiones exactas de dependencias
└── README.md                      # Este archivo
```

## Pruebas con Postman/Insomnia

Para probar la API, puedes usar las siguientes solicitudes:

1. **Crear un usuario**:
   - Método: POST
   - URL: http://localhost:3000/usuarios
   - Body (JSON):
     ```json
     {
       "nombre": "Ana García",
       "email": "ana@ejemplo.com",
       "edad": 28
     }
     ```

2. **Obtener todos los usuarios**:
   - Método: GET
   - URL: http://localhost:3000/usuarios

3. **Actualizar un usuario**:
   - Método: PUT
   - URL: http://localhost:3000/usuarios/:id
   - Body (JSON):
     ```json
     {
       "edad": 29
     }
     ```

4. **Verificar contadores**:
   - Método: GET
   - URL: http://localhost:3000/contadores

5. **Verificar operaciones realizadas**:
   - Método: GET
   - URL: http://localhost:3000/operaciones

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript
- **Express.js**: Framework web para Node.js
- **MongoDB**: Base de datos NoSQL
- **Mongoose**: ODM para MongoDB en Node.js
- **Docker**: Contenedorización de aplicaciones
- **Docker Compose**: Orquestación de contenedores

## Notas Adicionales

- La aplicación utiliza un middleware de registro que contabiliza todas las operaciones realizadas.
- Se implementan validaciones básicas en los modelos de Mongoose.
- Todos los endpoints devuelven respuestas JSON con códigos HTTP apropiados.
- La base de datos persiste los datos a través de un volumen de Docker.
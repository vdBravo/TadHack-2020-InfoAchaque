# TadHack-2020-InfoAchaque

Manual de usuario
Para correr la aplicación web tiene que instalar mongo y node.js.
1)	descargar el proyecto desde git hub
2)	encender base de datos mongodb 
3)	instalar dependencias del server por comandos tales como:
Morgan = npm install morgan
Express = npm install express
Mongoose = npm install mongoose
Nodemon = npm install nodemon
Avaya = npm install @avaya/cpaas
Cors = npm install cors 
Estos se corren en la terminal con el comando npm run dev

4)	abrir un nuevo terminal y descargar por comandos 
antes de descargar angular ejecutamos una ventana de comandos power Shell como administrador y ejecutamos este comando para que nos de permisos Set-ExecutionPolicy -Scope CurrentUser unrestricted
después nos devolvemos a la terminal y descargamos las demás dependencias
angular = npm install @angular/cli -
bootswatch = npm install bootswatch
ng2 = npm install ng2
ngx-pagination = npm install ngx-pagination
pipe = npm install pipe
rxjs = npm install rxjs
tslib = npm install tslib
zone.js = npm install zone.js

después sobre la carpeta frontend ejecutamos estos comandos en la terminal
ng build y ng serve 
tiene que tener en cuenta que debe ejecutar en dos terminales a la vez uno encima de la carpeta frontend con el comando npm run dev y sobre la carpeta server con el comando npm serve.

Es importante crear la colección con el nombre correcto a mongo y cargar el archivo .csv que esta en el repositorio.

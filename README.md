# Spotiapp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Comentarios para la ejecución de la aplicación

Una vez restaurados los node_modules, se debe actualizar el token de seguridad para consumir el api de spotify (debido a políticas de spotify caduca cada hora)

así que en caso que se quiera probar la funcionalidad, se debe actualizar el siguiente archivo

https://github.com/serugio/app-spotify-angular/blob/master/src/app/services/spotify.service.ts

en el método getQuery reemplazar después del siguiente texto:     'Authorization': 'Bearer     el código que aparece, en el ejemplo corresponde a la cadena BQBVPwoXlm1hmsO_W5BD9wmnKaYyt6g_8QdfAPnrvC3nZBrOemMUiR7T-NOObuykW_ubUk_PdUYQ3GhhTt0

para generar un nuevo token se puede realizar mediante postman o cualquier herramienta para enviar peticiones post,

se puede acceder mediante el siguiente link:

https://accounts.spotify.com/api/token


 ### ejemplo
 ~~~
getQuery(query:string){
    const URL:string = `https://api.spotify.com/v1/${ query }` 
    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBVPwoXlm1hmsO_W5BD9wmnKaYyt6g_8QdfAPnrvC3nZBrOemMUiR7T-NOObuykW_ubUk_PdUYQ3GhhTt0'
    });

~~~

en el response obtenido van a recibir un campo llamado "access_token", copiar el valor de este campo y reemplazarlo en el sitio indicado anteriormente.


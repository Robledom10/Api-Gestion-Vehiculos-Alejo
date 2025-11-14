# *Informe sobre conceptos básicos de APIs REST y Express*

---

## 1. Diferencia entre los métodos GET, POST, PUT, PATCH y DELETE

Los métodos HTTP definen la acción que queremos realizar sobre un recurso en una API REST:

* **GET** : Recupera información de un recurso sin modificarlo.

  Ejemplo: obtener los detalles de un producto.

* **POST** : Crea un nuevo recurso enviando datos al servidor.

  Ejemplo: registrar un usuario o crear un pedido.

* **PUT** : Actualiza un recurso completo. Si el recurso no existe, algunos servidores pueden crearlo.

  Ejemplo: actualizar toda la información de un perfil de usuario.

* **PATCH** : Actualiza parcialmente un recurso existente.

  Ejemplo: cambiar solo el correo electrónico de un usuario.

* **DELETE** : Elimina un recurso.

  Ejemplo: borrar un producto o una cuenta.

---

## 2. ¿Qué es un endpoint y qué representa en una API REST?

Un **endpoint** es una URL específica de una API a la que se puede acceder para realizar operaciones con un recurso.

Representa un punto de entrada al servidor donde el cliente puede  **consultar, crear, actualizar o eliminar información** .

Ejemplo: `https://api.tienda.com/productos/123` es un endpoint para acceder al producto con id 123.

---

## 3. ¿Qué significa req y res dentro de las funciones de Express?

En Express, las funciones que manejan rutas reciben dos objetos principales:

* **`req` (request)** : Representa la **solicitud** del cliente. Contiene información como headers, parámetros, body y query strings.
* **`res` (response)** : Representa la **respuesta** que enviará el servidor al cliente. Se utiliza para enviar datos, códigos de estado y mensajes.

```
app.get('/usuario/:id, (req: Request, res: Response) => {
	console.log(req.params.id);
	res.send('Usuario encontrado');
})
```

---

## 4. ¿Por qué normalmente los datos se envían en formato JSON?

* **JSON (JavaScript Object Notation)** es un formato ligero, fácil de leer y escribir.
* Es compatible con la mayoría de lenguajes de programación.
* Permite estructurar datos complejos (objetos y arrays) de manera clara.
* Facilita la comunicación entre el frontend y el backend.

---

## 5. Ventajas de guardar los datos en una base de datos en lugar de un array en memoria

* **Persistencia** : Los datos no se pierden al reiniciar el servidor.
* **Escalabilidad** : Maneja grandes cantidades de datos de manera eficiente.
* **Consultas avanzadas** : Permite filtrar, ordenar y relacionar información fácilmente.
* **Seguridad** : Se puede controlar el acceso a los datos mediante permisos y autenticación.
* **Concurrencia** : Soporta múltiples usuarios accediendo y modificando los datos simultáneamente.

---

## 6. Route params y query params, y sus diferencias

* **Route params** : Son parte de la ruta y se usan para identificar recursos específicos.

  Ejemplo: `/usuario/:id` → `/usuario/123` → `id = 123`

* **Query params** : Se pasan al final de la URL como pares clave-valor y normalmente se usan para filtros o búsqueda.

  Ejemplo: `/productos?categoria=cafe&orden=asc`

 **Diferencia clave** :

* Route params identifican  **recursos específicos** .
* Query params filtran o modifican la información que se devuelve.

---

## 7. Herramientas para probar endpoints

* **Postman** : Muy popular, permite enviar solicitudes con distintos métodos y cuerpos de datos.
* **Insomnia** : Similar a Postman, con interfaz simple y moderna.
* **cURL** : Herramienta de línea de comandos para probar APIs.
* **Extensiones de navegador** : Algunas como RESTer o Thunder Client (VS Code).
* **Swagger / OpenAPI** : Documentación interactiva que permite probar endpoints directamente desde el navegador.

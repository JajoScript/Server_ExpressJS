# Curso Avanzado de ExpressJS

*** 
### ¿Qué es Express?
Es un framework para crear aplicaciónes web basado en Javascript.

*   Inspirado en Sinatra, un framework de ruby.
*   Web App, Web apis, web Services.
*   Open source, MIT License.

**Un poco de historia...**

*   Express fue adquirido por *StrongLoop* en junio del 2014.
*   Express fue adquirido por *IBM* en septiembre del 2015.
*   Express fue entregado a NodeJS Fundation en enero del 2016.

**Caracteristicas**

*   Minimalista.
*   Template Engines.
*   Routing.
*   Middlewares.
*   Plugins (as middlewares).

**Template Engine**

Un *template engine* es una implementación de software que sirve para mezclar datos y un template, mediante el template engine podemos generar un documento **Html**.

    Data               Template
      |                    |
      --> Template Engine <-- 
                |
         Result document

Algunos de los *template engine* más conocidos son:

*   Handlebars (Javascript)
*   Twig y Blade (Laravel / PHP)
*   JSP (Java)
*   Jinja (Python)

**Creando tu propio template engine**

Estructura general del *template engine*:

    app.engine(<File extension>,<template engine callback>);

Express ofrece el metodo *engine* para crear templates, el cual recibe 2 parametros generales: la *extención* del archivo y el *template engine callback*.

Estructura especifica del *template engine*:

    app.engine("extención", (filePath, options, callbak) => {})

**Parametros**:

*   Extención => extención del archivo.
*   filePath => ruta del archivo.
*   options => los datos que le vamos a pasar al template.
*   callback => el regreso de todos los archivos que vamos a mostrar.

**Finalmente**

    app.set("views", "./views")
    : Especificar el directorio de las vistas.

    app.set("view engine", "extension")
    : Registra el template engine.

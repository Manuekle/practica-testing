<!-- create readme for testing tutorial -->
# Inicalizar un proyecto de testing con WebdriverIO y Mocha

## Introducción

En este tutorial vamos a ver cómo inicializar un proyecto de testing con WebdriverIO y Mocha. WebdriverIO es un framework de automatización de pruebas para navegadores web. Mocha es un framework de pruebas para Node.js.

## Requisitos

Para seguir este tutorial necesitas tener instalado Node.js en tu sistema. Puedes descargarlo desde la página oficial de Node.js.

## Inicializar el proyecto

Para inicializar el proyecto, primero debemos crear una carpeta para el proyecto y luego ejecutar el siguiente comando en la terminal:

```bash
npm init wdio .
```

Este comando creará un archivo de configuración llamado `wdio.conf.js` en la raíz del proyecto.

## Configurar el archivo de configuración

El archivo de configuración `wdio.conf.js` contiene la configuración del proyecto. Puedes modificar este archivo para ajustar la configuración a tus necesidades.

## Crear los archivos de prueba

Para crear los archivos de prueba, debemos crear una carpeta llamada `test/specs/` en la raíz del proyecto y luego crear un archivo de prueba con la extensión `*.ts` dentro de esta carpeta.

## Ejecutar las pruebas

Para ejecutar las pruebas, debemos ejecutar el siguiente comando en la terminal:

```bash
npx wdio run wdio.conf.ts
```

Este comando ejecutará las pruebas y mostrará los resultados en la terminal.

## Conclusión

En este tutorial hemos visto cómo inicializar un proyecto de testing con WebdriverIO y Mocha. Espero que te haya sido útil y que te haya ayudado a empezar con la automatización de pruebas en tu proyecto.

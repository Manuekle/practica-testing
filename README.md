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

Esto abrirá un asistente de configuración que te guiará a través de la configuración del proyecto. Puedes elegir las opciones por defecto o personalizarlas según tus necesidades.

Te preguntará si el nombre del proyecto es correcto, si quieres cambiarlo, puedes hacerlo. Luego te preguntará si quieres usar TypeScript, puedes elegir `Yes` o `No`.

¿Qué tipo de pruebas le gustaría hacer?, selecciona `E2E Testing - of Web or Mobile Applications`.

Dónde se ejecutarán sus pruebas?, selecciona `On my local machine`.

¿Qué entorno desea automatizar?, selecciona `Web - web applications in the browser`.

¿Con qué navegador debemos empezar?, selecciona `Chrome`.

Que framework de pruebas quieres usar, selecciona `Mocha`.

¿Quiere utilizar un compilador?, selecciona `TypeScript`.

 ¿Quiere que WebdriverIO autogenere algunos archivos de prueba?, selecciona `Yes`.

¿Cuál debería ser la ubicación de los archivos de especificaciones?, presiona `Enter`.

¿Desea utilizar objetos de página?, selecciona `No`.

¿Qué periodista quiere utilizar?, selecciona `spec`.

¿Quieres añadir un plugin a tu configuración de prueba?, presiona `Enter` para no añadir ningún plugin.

¿Desea incluir pruebas visuales en su configuración?, selecciona `No`.

¿Desea añadir un servicio a su configuración de prueba?, presiona `Enter` para no añadir ningún servicio.

¿Quieres que ejecute `npm install` para instalar las dependencias?, selecciona `Yes`.

Este comando creará un archivo de configuración llamado `wdio.conf.ts` en la raíz del proyecto.

## Configurar el archivo de configuración

El archivo de configuración `wdio.conf.ts` contiene la configuración del proyecto. Puedes modificar este archivo para ajustar la configuración a tus necesidades.

## Crear los archivos de prueba

Para crear los archivos de prueba, debemos crear una carpeta llamada `test/specs/` en la raíz del proyecto y luego crear un archivo de prueba con la extensión `*.ts` dentro de esta carpeta.

## Ejecutar las pruebas

Si quieres usar este repositorio y ejecutar las pruebas, primero debes clonar el repositorio en tu máquina local. Para hacer esto, ejecuta el siguiente comando en la terminal:

```bash
git clone https://github.com/Manuekle/practica-testing.git
```

Luego, debes instalar las dependencias del proyecto. Para hacer esto, ejecuta el siguiente comando en la terminal:

```bash
npm install
```

Para ejecutar las pruebas, debemos ejecutar el siguiente comando en la terminal:

```bash
npx wdio run wdio.conf.ts
```

Este comando ejecutará las pruebas y mostrará los resultados en la terminal.

## Conclusión

En este tutorial hemos visto cómo inicializar un proyecto de testing con WebdriverIO y Mocha. Espero que te haya sido útil y que te haya ayudado a empezar con la automatización de pruebas en tu proyecto.

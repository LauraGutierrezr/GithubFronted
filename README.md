# PARCIAL CVDS Final frontend

**👥 Estudiante CVDS:**
- Laura Valentina Gutiérrez Rico

--

## PROCEDIMIENTO PARCIAL:

**Como primer paso creo un repositorio privado en mi Git**



**En Sprint Initializr creo un nuevo proyecto llamado parcial02 en maven**

![image](https://github.com/user-attachments/assets/5504de88-d997-4b1d-b00c-2a5127b050a4)


**Análisis Implementación**
implementar un sistema que permita a los usuarios: 
      ```
      -Funcional
      -Fácil para el usuario
      -ver especialidades médicas
      -programar citas
      -consultar su historial de citas
      ```

**Voy a implementarlo con html y js**
Teniendo los archivos básicos para crear el fronted

```
  Index.html para la visualización de la implementación
  script.js clases funcionales para implementación
  style el estilo visual que quiero para cada una de las implementaciones
```

**Resultado gráfico Fronted**



'----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'



**BACKEND**


**Modifico el archivo pom.xml integrando mongo, añadiendo Jacoco**

  --Jcoco


![image](https://github.com/user-attachments/assets/0978c850-a5c5-427e-8c48-ea53beb4fc76)


  --MongoDB

  
![image](https://github.com/user-attachments/assets/b8e5092e-53ac-411d-8aae-c1cd5c08ef28)



  --Creacion clases



![image](https://github.com/user-attachments/assets/590ffeaa-f493-456b-bd0e-752aecd87ca0)








**Creación proyecto MONGODB**

![image](https://github.com/user-attachments/assets/2512f93e-e504-43fd-a78a-cc8598931819)




'--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------'


**FRONTED**

Para la creación del front la realizaré con HTML desde mi local, teniendo en cuenta los archivos base que son .css, .js , .HTML tomé una plantilla básica para crearla a las necesidades del parcial y su finalidad


![image](https://github.com/user-attachments/assets/9e08e7e3-8fdf-4836-a721-b26de769b553)


      ```
     El Fronted ya está listo, es funcional y practico, cumpliendo los requisitos dados en el problema.

       -Permite registrar compra
       -Verificar productos
       -Registrar el pago
       -Buscar compras anteriormente realizadas por el usuario con su Id correspondiente
     Falta la integración con la base de datos mongo
      ```



**Estructura de todo el proyecto con tree**
--Se puede observar en la imagen la estructura de los archivos creados, en la carpeta parcial02, están almacenados los archivos que contienen las clases de test, el archivo pom.xml, src y target

![image](https://github.com/user-attachments/assets/bab77537-c998-4efa-abd5-5461c68af5f3)



<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>ECI Salud Vital</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <h1>ECI Salud Vital - Especialidades</h1>
  <div id="especialidades" class="grid"></div>

  <div id="detalle-especialidad" class="hidden">
    <img id="img-detalle" />
    <p id="descripcion"></p>
    <p id="doctor"></p>
    <p id="ubicacion"></p>
    <button onclick="mostrarFormulario()">Programar Cita</button>
  </div>

  <div id="formulario-cita" class="hidden">
    <h2>Programar Cita</h2>
    <form onsubmit="programarCita(event)">
      <input type="text" id="nombre" placeholder="Nombre completo" required />
      <input type="text" id="cedula" placeholder="Cédula" required />
      <input type="email" id="correo" placeholder="Correo electrónico" required />
      <input type="date" id="fecha" required />
      <div id="resumen-cita"></div>
      <button type="submit">Confirmar Cita</button>
    </form>
    <p id="error" class="error"></p>
  </div>

  <script src="script.js"></script>
</body>
</html>

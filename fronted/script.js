const especialidades = [
    {
        nombre: "Espacio de Medicina General",
        imagen: "medicina.jpg",
        descripcion: "Diagnóstico y tratamiento general",
        doctor: "Dra. Pepita",
        ubicacion: "Sala 11"
      },
    {
        nombre: "Ortopedia ECI",
        imagen: "ortopedia.jpg",
        descripcion: "Tratamiento de huesos y articulaciones",
        doctor: "Dra. Andrea y Dr. Pablo",
        ubicacion: "Sala 13"
      },
    {
      nombre: "Psicología ECI",
      imagen: "psicologia.jpg",
      descripcion: "Atención psicológica y salud emocional para eci",
      doctor: "Dr. Juan y Dra. Jessica",
      ubicacion: "Sala 12"
    },
    {
      nombre: "Odontología de ECI",
      imagen: "odontologia.jpg",
      descripcion: "Lo relacionado con cuidado dental",
      doctor: "Dr. Andres",
      ubicacion: "Bloque A"
    }
  ];
  
  let especialidadSeleccionada = null;
  
  window.onload = function () {
    const contenedor = document.getElementById("especialidades");
    especialidades.forEach((e, i) => {
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = `<h3>${e.nombre}</h3><img src="${e.imagen}" alt="${e.nombre}" />`;
      div.onclick = () => mostrarDetalle(i);
      contenedor.appendChild(div);
    });
  };
  
  function mostrarDetalle(index) {
    const e = especialidades[index];
    especialidadSeleccionada = e;
  
    document.getElementById("img-detalle").src = e.imagen;
    document.getElementById("descripcion").innerText = e.descripcion;
    document.getElementById("doctor").innerText = "Doctor: " + e.doctor;
    document.getElementById("ubicacion").innerText = "Ubicación: " + e.ubicacion;
  
    document.getElementById("detalle-especialidad").classList.remove("hidden");
  }
  
  function mostrarFormulario() {
    document.getElementById("formulario-cita").classList.remove("hidden");
    const resumen = `
      <p>Fecha: <span id="fecha-resumen"></span></p>
      <p>Especialidad: ${especialidadSeleccionada.nombre}</p>
      <p>Doctor: ${especialidadSeleccionada.doctor}</p>
      <p>Ubicación: ${especialidadSeleccionada.ubicacion}</p>
    `;
    document.getElementById("resumen-cita").innerHTML = resumen;
  }
  
  function programarCita(event) {
    event.preventDefault();
  
    const nombre = document.getElementById("nombre").value;
    const fecha = document.getElementById("fecha").value;
    const cedula = document.getElementById("cedula").value;
    const correo = document.getElementById("correo").value;
    const error = document.getElementById("error");
  
    if (!nombre || !fecha ||!cedula || !correo ) {
      error.textContent = "Todos los campos son obligatorios, tiene que llenarloss";
      return;
    }
  
    const hoy = new Date();
    const fechaCita = new Date(fecha);
    if (fechaCita < hoy.setHours(0, 0, 0, 0)) {
      error.textContent = "La fecha debe ser la misma o posterior a hoy";
      return;
    }
  
    // En esta parte hago la union con el back
    alert("Cita confirmada para usted");
    error.textContent = "";
  }
  
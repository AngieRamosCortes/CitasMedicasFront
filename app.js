const apiBase = "https://angieBackP3/Azure/api";

async function cargarEspecialidades() {
  const res = await fetch(apiBase + "/especialidades");
  const data = await res.json();
  const contenedor = document.getElementById("especialidades");
  contenedor.innerHTML = "";
  data.forEach(e => {
    const div = document.createElement("div");
    div.innerHTML = `<h3>${e.nombre}</h3><img src="${e.imagen}" width="100"/><button onclick='verDetalle(${JSON.stringify(e)})'>Ver más</button>`;
    contenedor.appendChild(div);
  });
}

let especialidadSeleccionada = {};

function verDetalle(e) {
  especialidadSeleccionada = e;
  document.getElementById("detalle").classList.remove("hidden");
  document.getElementById("nombreEspecialidad").textContent = e.nombre;
  document.getElementById("imagenEspecialidad").src = e.imagen;
  document.getElementById("descripcionEspecialidad").textContent = e.descripcion;
  document.getElementById("doctorEspecialidad").textContent = e.doctor;
  document.getElementById("ubicacionEspecialidad").textContent = e.ubicacion;
}

function mostrarFormulario() {
  document.getElementById("formularioCita").classList.remove("hidden");
}

async function confirmarCita() {
  const nombre = document.getElementById("nombre").value;
  const cedula = document.getElementById("cedula").value;
  const correo = document.getElementById("correo").value;
  const fecha = document.getElementById("fecha").value;
  const cita = { nombre, cedula, correo, fecha, ...especialidadSeleccionada };
  const res = await fetch(apiBase + "/citas", {
    method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(cita)
  });
  const data = await res.json();
  document.getElementById("estadoCita").textContent = data.estado;
}

async function cargarHistorial() {
  const correo = document.getElementById("filtroCorreo").value;
  const estado = document.getElementById("filtroEstado").value;
  let url = `${apiBase}/citas?correo=${correo}`;
  if (estado) url += `&estado=${estado}`;
  const res = await fetch(url);
  const data = await res.json();
  const lista = document.getElementById("listaCitas");
  lista.innerHTML = "";
  data.forEach(c => {
    const div = document.createElement("div");
    div.className = c.estado.toLowerCase();
    div.innerHTML = `ID: ${c._id}<br>Especialidad: ${c.especialidad}<br>Fecha: ${c.fecha}<br>Estado: ${c.estado}
      ${c.estado === "Confirmada" ? `<button onclick="cancelarCita('${c._id}')">Cancelar</button>` : ""}`;
    lista.appendChild(div);
  });
}

async function cancelarCita(id) {
  await fetch(apiBase + `/citas/${id}/cancelar`, { method: "PUT" });
  cargarHistorial();
}

window.onload = cargarEspecialidades;

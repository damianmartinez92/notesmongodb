import React, { useContext } from "react";
import ProyectoContext from "../../Context/Proyectos/ProyectoContext";
import TareaContext from "../../Context/Tareas/TareaContext";

const Tarea = ({ tarea }) => {
  const proyectoContext = useContext(ProyectoContext);
  const { proyecto } = proyectoContext;

  const tareasContext = useContext(TareaContext);
  const {
    eliminarTarea,
    obtenerTareas,
    guardarTareaActual,
    actualizarTarea,
  } = tareasContext;

  const [proyectoActual] = proyecto;

  const tareaEliminar = (id) => {
    eliminarTarea(id, proyectoActual._id);
    obtenerTareas(proyectoActual.id);
  };

  // Agregar una tarea actual cuando el usuario quiera editarla
  const seleccionarTarea = (tarea) => {
    guardarTareaActual(tarea);
  };

  const cambiarEstado = (tarea) => {
    if (tarea.estado) {
      tarea.estado = false;
    } else {
      tarea.estado = true;
    }
    actualizarTarea(tarea);
  };
  return (
    <li className="tarea sombra">
      <p>{tarea.nombre}</p>
      <div className="estado">
        {tarea.estado ? (
          <button
            type="button"
            className="completo"
            onClick={() => cambiarEstado(tarea)}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={() => cambiarEstado(tarea)}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={() => seleccionarTarea(tarea)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={() => tareaEliminar(tarea._id)}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
};

export default Tarea;

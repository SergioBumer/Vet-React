import React from "react";

const Paciente = ({ paciente, setPaciente, eliminarPaciente }) => {

  const handleEliminar = () => {
    const respuesta = confirm("Deseas continuar?");
    if (respuesta) {
      eliminarPaciente(paciente.id);
    }
  }
  return (
    <div className="mx-5 mb-5 bg-white shadow-md px-5 py-5 rounded-xl">
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Nombre: {""}
        <span className="font-normal normal-case">
          {paciente.nombreMascota}
        </span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Propietario: {""}
        <span className="font-normal normal-case">{paciente.propietario}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Email: {""}
        <span className="font-normal normal-case">{paciente.email}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Fecha Alta: {""}
        <span className="font-normal normal-case">{paciente.fecha}</span>
      </p>
      <p className="font-bold mb-3 text-gray-700 uppercase">
        Observaciones: {""}
        <span className="font-normal normal-case">{paciente.sintomas}</span>
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => {
            setPaciente(paciente);
          }}
          type="button"
          className="py-2 px-10 bg-indigo-500 hover:bg-indigo-700 rounded-md uppercase text-white font-bold"
        >
          Editar
        </button>
        <button
          type="button"
          className="ml-2 py-2 px-10 bg-red-500 hover:bg-red-700 rounded-md uppercase text-white font-bold"
          onClick={handleEliminar}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Paciente;

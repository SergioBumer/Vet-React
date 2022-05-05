import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);
  // Solo cuando se detectan cambios en el objeto paciente, se hacen las acciones dentro de la función.
  useEffect(() => {
    if (Object.keys(paciente).length > 0) {
      setNombreMascota(paciente.nombreMascota);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setFecha(paciente.fecha);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  // Acción del botón.
  const handleSubmit = (e) => {
    e.preventDefault();

    if ([nombreMascota, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return;
    }
    setError(false);

    function generarId() {
      return Date.now().toString(36);
    }

    const objetoPaciente = {
      nombreMascota,
      propietario,
      email,
      fecha,
      sintomas,
    };

    // Elección de edición o agregación.
    if (paciente.id) {
      //Editando el registro
      objetoPaciente.id = paciente.id;
      const pacientesActualizados = pacientes.map((pacienteState) =>
        pacienteState.id === paciente.id ? objetoPaciente : pacienteState
      );

      setPacientes(pacientesActualizados);
      setPaciente({});
    } else {
      objetoPaciente.id = generarId();
      setPacientes([...pacientes, objetoPaciente]);
    }
    // Reinicio del formulario
    setNombreMascota("");
    setPropietario("");
    setEmail("");
    setFecha("");
    setSintomas("");
  };

  return (
    <div className="md:w-1/2 lg:w-2/5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Añade pacientes y {""}
        <span className="text-indigo-600 font-bold">Trasforma su vida</span>
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mx-5 sm:mx-0"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son Obligatorios." />}
        <div className="mb-5">
          <label
            htmlFor="nombreMascota"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Mascota
          </label>
          <input
            id="nombreMascota"
            type="text"
            placeholder="Nombre de la Mascota"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={nombreMascota}
            onChange={(e) => {
              setNombreMascota(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="nombrePropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Nombre Propietario
          </label>
          <input
            id="nombrePropietario"
            type="text"
            placeholder="Nombre del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={propietario}
            onChange={(e) => {
              setPropietario(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="emailPropietario"
            className="block text-gray-700 uppercase font-bold"
          >
            Email Propietario
          </label>
          <input
            id="emailPropietario"
            type="email"
            placeholder="Email del Propietario"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="fechaAlta"
            className="block text-gray-700 uppercase font-bold"
          >
            Fecha del Alta
          </label>
          <input
            id="fechaAlta"
            type="date"
            placeholder="Fecha del Alta"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
            value={fecha}
            onChange={(e) => {
              setFecha(e.target.value);
            }}
          />
        </div>

        <div className="mb-5">
          <label
            htmlFor="observaciones"
            className="block text-gray-700 uppercase font-bold"
          >
            Observaciones
          </label>
          <textarea
            id="observaciones"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md h-20 resize-none"
            placeholder="Observaciones de la consulta/hospitalización"
            value={sintomas}
            onChange={(e) => {
              setSintomas(e.target.value);
            }}
          />
        </div>

        <input
          type="submit"
          className="bg-indigo-600 w-full rounded p-3 text-white uppercase cursor-pointer active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          value={paciente.id ? "Editar Paciente" : "Agregar Paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;

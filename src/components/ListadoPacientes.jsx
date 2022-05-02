import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {
  return (
    <div className="md:w-1/2 lg:w-3/5 mt-10 md:mt-0">
      {pacientes && pacientes.length ? (
        <>
          <h2 className="font-black text-3xl text-center">
            Listado de los pacientes
          </h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Administra tus {""}
            <span className="text-indigo-600 font-bold ">
              {" "}
              Pacientes y Citas
            </span>
          </p>
          <div
            style={{ height: "640px" }}
            className="md:overflow-y-scroll md:overflow-visible"
          >
            {pacientes.map((paciente) => {
              return (
                <Paciente
                  key={paciente.id}
                  paciente={paciente}
                  setPaciente={setPaciente}
                  eliminarPaciente={eliminarPaciente}
                />
              );
            })}
          </div>
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">No Hay Pacientes</h2>

          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {""}
            <span className="text-indigo-600 font-bold ">
              {" "}
              y Aparecerán en este lugar
            </span>
          </p>
        </>
      )}
    </div>
  );
};

export default ListadoPacientes;

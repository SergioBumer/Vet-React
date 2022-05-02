import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";
function App() {
  const basePacientes = [
    {
      nombreMascota: "Aki",
      propietario: "Daniela",
      email: "daniela@a.com",
      fecha: "2022-05-12",
      sintomas: "Solo duerme",
      id: "qwerty1",
    },
    {
      nombreMascota: "Coffee",
      propietario: "Natha",
      email: "natha@a.com",
      fecha: "2022-05-12",
      sintomas: "Solo jode",
      id: "qwerty2",
    },
    {
      nombreMascota: "Popey",
      propietario: "Urias",
      email: "urias@a.com",
      fecha: "2022-05-12",
      sintomas: "Solo duerme",
      id: "qwerty3",
    },
    {
      nombreMascota: "Bambi",
      propietario: "Urias",
      email: "urias@a.com",
      fecha: "2022-05-12",
      sintomas: "Solo juega como loco",
      id: "qwerty4",
    },
    {
      nombreMascota: "Poker",
      propietario: "Edgar",
      email: "edgar@a.com",
      fecha: "2022-05-12",
      sintomas: "Ya esta viejito",
      id: "qwerty5",
    },
  ];
  const [pacientes, setPacientes] = useState([]);
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesSTR = localStorage.getItem('pacientes') ?? [];
      console.log(pacientesSTR);
      if (typeof pacientesSTR != "undefined") {
        console.log("pacientes");
        console.log(pacientesSTR);
        const pacientesLS = JSON.parse(pacientesSTR) ?? [];
        if (pacientesLS.length > 0) {
          setPacientes(pacientesLS);
        } else {
          console.log("Setting pacientes");
          setPacientes(basePacientes);
        };
      } else {
        setPacientes(basePacientes);
      }
    };
    obtenerLS();
  }, []);
  
  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes]);

  const eliminarPaciente = (id) => {
    const pacientesActualizados = pacientes.filter(
      (pacienteState) => pacienteState.id !== id
    );
    setPacientes(pacientesActualizados);
  };

  return (
    <div className="container mx-auto mt-20 mb-0">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;

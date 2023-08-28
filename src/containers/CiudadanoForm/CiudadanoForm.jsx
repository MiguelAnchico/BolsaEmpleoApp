// CiudadanoForm.js
import { Calendar } from "primereact/calendar";
import FormInput from "../../components/FormInput/FormInput";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";

import PropTypes from "prop-types";
import { useState } from "react";

const CiudadanoForm = ({ onSubmit, initialData }) => {
  const [aspiracionSalarial, setAspiracionSalarial] = useState(
    initialData?.aspiracionSalarial
  );
  const [tipoDocumento, setTipoDocumento] = useState(
    initialData?.tipoDocumento
  );
  const [cedula, setCedula] = useState(initialData?.cedula);
  const [nombres, setNombres] = useState(initialData?.nombres);
  const [apellidos, setApellidos] = useState(initialData?.apellidos);
  const [fechaNacimiento, setFechaNacimiento] = useState(
    initialData?.fechaNacimiento
  );
  const [profesion, setProfesion] = useState(initialData?.profesion);
  const [correoElectronico, setCorreoElectronico] = useState(
    initialData?.correoElectronico
  );

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: initialData,
  });

  if (!initialData) {
    return <p>Cargando</p>;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <FormInput
        label="Aspiración Salarial"
        id="aspiracionSalarial"
        type="number"
        register={register}
        rules={{ required: "Este campo es obligatorio" }}
        errors={errors}
        value={aspiracionSalarial}
        onChange={(e) => setAspiracionSalarial(e.target.value)}
      />
      <FormInput
        label="Tipo de Documento"
        id="tipoDocumento"
        register={register}
        rules={{ required: "Este campo es obligatorio", maxLength: 50 }}
        errors={errors}
        value={tipoDocumento}
        onChange={(e) => setTipoDocumento(e.target.value)}
      />
      <FormInput
        label="Cédula"
        id="cedula"
        register={register}
        rules={{ required: "Este campo es obligatorio", maxLength: 20 }}
        errors={errors}
        value={cedula}
        onChange={(e) => setCedula(e.target.value)}
      />
      <FormInput
        label="Nombres"
        id="nombres"
        register={register}
        rules={{ required: "Este campo es obligatorio", maxLength: 100 }}
        errors={errors}
        value={nombres}
        onChange={(e) => setNombres(e.target.value)}
      />
      <FormInput
        label="Apellidos"
        id="apellidos"
        register={register}
        rules={{ required: "Este campo es obligatorio", maxLength: 100 }}
        errors={errors}
        value={apellidos}
        onChange={(e) => setApellidos(e.target.value)}
      />
      <FormInput
        label="Fecha de Nacimiento"
        id="fechaNacimiento"
        register={register}
        rules={{ required: "Este campo es obligatorio" }}
        errors={errors}
        value={new Date(fechaNacimiento)}
        onChange={(e) => setFechaNacimiento(e.target.value)}
        Component={Calendar}
      />
      <FormInput
        label="Profesión (Opcional)"
        id="profesion"
        register={register}
        rules={{ maxLength: 100 }}
        errors={errors}
        value={profesion}
        onChange={(e) => setProfesion(e.target.value)}
      />
      <FormInput
        label="Correo Electrónico"
        id="correoElectronico"
        type="email"
        register={register}
        rules={{
          required: "Este campo es obligatorio",
          maxLength: 100,
          pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        }}
        errors={errors}
        value={correoElectronico}
        onChange={(e) => setCorreoElectronico(e.target.value)}
      />
      <Button type="submit" label="Crear Ciudadano" />
    </form>
  );
};

CiudadanoForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialData: PropTypes.shape({
    aspiracionSalarial: PropTypes.number,
    tipoDocumento: PropTypes.string,
    cedula: PropTypes.string,
    nombres: PropTypes.string,
    apellidos: PropTypes.string,
    fechaNacimiento: PropTypes.instanceOf(Date),
    profesion: PropTypes.string,
    correoElectronico: PropTypes.string,
  }),
};

CiudadanoForm.defaultProps = {
  initialData: {},
};

export default CiudadanoForm;

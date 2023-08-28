import { InputText } from "primereact/inputtext";
import PropTypes from "prop-types";

/**
 * FormInput - Un componente de entrada de formulario reutilizable.
 *
 * @param {string} label - Etiqueta del campo de entrada.
 * @param {string} id - Identificador único para el campo de entrada.
 * @param {string} type - Tipo de input que recibira el campo
 * @param {function} register - Función para registrar el campo en el formulario.
 * @param {object} rules - Reglas de validación para el campo.
 * @param {object} errors - Objeto que contiene errores de validación.
 * @param {object} Component - Objeto que contiene un Input Especial.
 * @param {object} Value - Valor del input para una maor personalización
 */
const FormInput = ({
  label,
  id,
  type,
  register,
  rules,
  errors,
  Component,
  value,
  onChange,
}) => {
  return (
    <div className="form-group">
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      {Component ? (
        <Component id={id} {...register(id, rules)} value={value} />
      ) : (
        <InputText
          id={id}
          type={type}
          {...register(id, rules)}
          value={value}
          onChange={onChange}
          className="form-input"
        />
      )}
      {errors[id] && <p className="error-message">{errors[id]?.message}</p>}
    </div>
  );
};

// Prop Types para validación de propiedades
FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  register: PropTypes.func.isRequired,
  rules: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  Component: PropTypes.elementType,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

export default FormInput;

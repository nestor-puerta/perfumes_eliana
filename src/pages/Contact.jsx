import React, { useState } from 'react';

const initialForm = {
  nombre: '',
  email: '',
  asunto: '',
  mensaje: '',
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const validate = () => {
    const validationErrors = {};

    if (!form.nombre.trim()) {
      validationErrors.nombre = 'El nombre es obligatorio.';
    }

    if (!form.email.trim()) {
      validationErrors.email = 'El correo electrónico es obligatorio.';
    } else {
      const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRe.test(form.email)) {
        validationErrors.email = 'Por favor ingresa un correo electrónico válido.';
      }
    }

    if (!form.asunto.trim()) {
      validationErrors.asunto = 'El asunto es obligatorio.';
    }

    if (!form.mensaje.trim()) {
      validationErrors.mensaje = 'El mensaje es obligatorio.';
    }

    return validationErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // Remove error on change (instant feedback)
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSuccess('');
      return;
    }

    // Aquí iría la llamada al backend si existiera.
    setSuccess('¡Gracias! Tu mensaje ha sido enviado correctamente.');
    setForm(initialForm);
    setErrors({});
  };

  return (
    <section style={{ padding: '2rem', maxWidth: 640, margin: '0 auto' }}>
      <h2>Contáctanos</h2>
      <p>Llena el formulario y te responderemos a la brevedad.</p>

      {success && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '0.75rem 1rem',
            border: '1px solid #28a745',
            borderRadius: 4,
            backgroundColor: '#e6ffea',
            color: '#155724',
          }}
        >
          {success}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.25rem' }}>
            Nombre *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: errors.nombre ? '1px solid #dc3545' : '1px solid #ced4da',
              borderRadius: 4,
            }}
          />
          {errors.nombre && (
            <p style={{ color: '#dc3545', marginTop: '0.25rem' }}>{errors.nombre}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.25rem' }}>
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: errors.email ? '1px solid #dc3545' : '1px solid #ced4da',
              borderRadius: 4,
            }}
          />
          {errors.email && (
            <p style={{ color: '#dc3545', marginTop: '0.25rem' }}>{errors.email}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="asunto" style={{ display: 'block', marginBottom: '0.25rem' }}>
            Asunto *
          </label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            value={form.asunto}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: errors.asunto ? '1px solid #dc3545' : '1px solid #ced4da',
              borderRadius: 4,
            }}
          />
          {errors.asunto && (
            <p style={{ color: '#dc3545', marginTop: '0.25rem' }}>{errors.asunto}</p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.25rem' }}>
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            value={form.mensaje}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '0.5rem',
              border: errors.mensaje ? '1px solid #dc3545' : '1px solid #ced4da',
              borderRadius: 4,
            }}
          />
          {errors.mensaje && (
            <p style={{ color: '#dc3545', marginTop: '0.25rem' }}>{errors.mensaje}</p>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: '#007bff',
            border: 'none',
            color: '#fff',
            padding: '0.75rem 1.25rem',
            borderRadius: 4,
            cursor: 'pointer',
          }}
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};

export default Contact;

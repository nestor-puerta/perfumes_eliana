import React, { useState } from 'react';
import MapLocation from '../components/MapLocation';

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
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const validationErrors = {};

    if (!form.nombre.trim()) {
      validationErrors.nombre = 'El nombre es obligatorio.';
    } else if (form.nombre.trim().length < 2) {
      validationErrors.nombre = 'El nombre debe tener al menos 2 caracteres.';
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
    } else if (form.asunto.trim().length < 3) {
      validationErrors.asunto = 'El asunto debe tener al menos 3 caracteres.';
    }

    if (!form.mensaje.trim()) {
      validationErrors.mensaje = 'El mensaje es obligatorio.';
    } else if (form.mensaje.trim().length < 10) {
      validationErrors.mensaje = 'El mensaje debe tener al menos 10 caracteres.';
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

  const handleBlur = (event) => {
    const { name } = event.target;
    const fieldErrors = validate();
    
    if (fieldErrors[name]) {
      setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
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

    setIsSubmitting(true);
    
    // Simulate sending (replace with actual backend call)
    setTimeout(() => {
      setSuccess('¡Gracias! Tu mensaje ha sido enviado correctamente.');
      setForm(initialForm);
      setErrors({});
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section style={{ padding: '2rem', maxWidth: 800, margin: '0 auto' }}>
      <h2 style={{ textAlign: 'center', color: '#5f2a6d', marginBottom: '1rem' }}>Contáctanos</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        ¿Tienes preguntas sobre perfumes? Estamos aquí para ayudarte. 
        Completa el formulario y te responderemos lo antes posible.
      </p>

      {success && (
        <div
          style={{
            marginBottom: '1rem',
            padding: '1rem',
            border: '1px solid #28a745',
            borderRadius: '8px',
            backgroundColor: '#d4edda',
            color: '#155724',
            textAlign: 'center',
            marginBottom: '2rem',
          }}
        >
          ✅ {success}
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate style={{ 
        backgroundColor: '#f8f9fa', 
        padding: '2rem', 
        borderRadius: '12px', 
        marginBottom: '2rem'
      }}>
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="nombre" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Nombre completo *
          </label>
          <input
            id="nombre"
            name="nombre"
            type="text"
            value={form.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Juan Pérez"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: errors.nombre ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease',
            }}
          />
          {errors.nombre && (
            <p style={{ color: '#dc3545', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              ⚠️ {errors.nombre}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Correo electrónico *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: juan@ejemplo.com"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: errors.email ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease',
            }}
          />
          {errors.email && (
            <p style={{ color: '#dc3545', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              ⚠️ {errors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor="asunto" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Asunto *
          </label>
          <input
            id="asunto"
            name="asunto"
            type="text"
            value={form.asunto}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Ej: Información sobre perfumes"
            style={{
              width: '100%',
              padding: '0.75rem',
              border: errors.asunto ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '8px',
              fontSize: '1rem',
              transition: 'border-color 0.3s ease',
            }}
          />
          {errors.asunto && (
            <p style={{ color: '#dc3545', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              ⚠️ {errors.asunto}
            </p>
          )}
        </div>

        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor="mensaje" style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 'bold', color: '#333' }}>
            Mensaje *
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows={5}
            value={form.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Escribe tu mensaje aquí..."
            style={{
              width: '100%',
              padding: '0.75rem',
              border: errors.mensaje ? '2px solid #dc3545' : '1px solid #ced4da',
              borderRadius: '8px',
              fontSize: '1rem',
              resize: 'vertical',
              minHeight: '120px',
              transition: 'border-color 0.3s ease',
            }}
          />
          {errors.mensaje && (
            <p style={{ color: '#dc3545', marginTop: '0.5rem', fontSize: '0.9rem' }}>
              ⚠️ {errors.mensaje}
            </p>
          )}
          <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '0.5rem' }}>
            Mínimo 10 caracteres ({form.mensaje.trim().length}/10)
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          style={{
            backgroundColor: isSubmitting ? '#6c757d' : '#5f2a6d',
            border: 'none',
            color: '#fff',
            padding: '1rem 2rem',
            borderRadius: '8px',
            cursor: isSubmitting ? 'not-allowed' : 'pointer',
            fontSize: '1rem',
            fontWeight: 'bold',
            width: '100%',
            transition: 'all 0.3s ease',
            opacity: isSubmitting ? 0.7 : 1,
          }}
        >
          {isSubmitting ? '⏳ Enviando...' : '📧 Enviar mensaje'}
        </button>
      </form>

      <MapLocation 
        titulo="Tiendas de perfumes"
        direccion="Visita tu perfumería más cercana para adquirir productos"
      />

      <div style={{ 
        backgroundColor: '#fff3cd', 
        padding: '1.5rem', 
        borderRadius: '12px', 
        marginTop: '2rem',
        textAlign: 'center'
      }}>
        <h3 style={{ color: '#856404', marginTop: 0 }}>💡 Recuerda</h3>
        <p style={{ color: '#856404', margin: 0 }}>
          Esta es una página informativa sobre perfumes. Para adquirir productos, 
          visita tiendas de perfumerías autorizadas en tu ciudad.
        </p>
      </div>
    </section>
  );
};

export default Contact;

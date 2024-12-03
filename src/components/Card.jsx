import { useState } from 'react';

const Card = () => {
  // Estado para los switches
  const [activeSwitch, setActiveSwitch] = useState(null); // null significa que ninguno está activo

  // Manejar cambios en los switches
  const handleSwitchChange = (switchName) => {
    if (activeSwitch === switchName) {
      setActiveSwitch(null); // Desactivar si ya estaba activo
    } else {
      setActiveSwitch(switchName); // Activar el switch seleccionado
    }
  };

  return (
    <div className="col-6 col-md-4 col-lg-3 mb-4 position-relative">
      <div className="card h-100">
        <div className="card-header p-0">
          <img src='../../public/image.png' className="img-fluid" alt="..." />
        </div>
        <div className="card-body text-center">
          <h5 className="card-title">Sunset</h5>
          <p className="card-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut eum similique repellat a laborum, rerum voluptates.</p>

          {/* Switches */}
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="maintenanceSwitch"
              checked={activeSwitch === 'maintenance'}
              onChange={() => handleSwitchChange('maintenance')}
            />
            <label className="form-check-label" htmlFor="maintenanceSwitch">
              Mantenimiento
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              type="checkbox"
              className="form-check-input"
              id="operationalSwitch"
              checked={activeSwitch === 'operational'}
              onChange={() => handleSwitchChange('operational')}
            />
            <label className="form-check-label" htmlFor="operationalSwitch">
              Operativo
            </label>
          </div>
        </div>
        <div className="card-footer text-center">
          <button type="button" className="btn btn-outline-success">
            Detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
import React, { useState } from "react";
import "../styles/adminDashboard.css";
import MyAccount from "../components/MyAccount"; // Importa el componente

// Opciones del menú
const menuItems = [
  { id: "myAccount", label: "Mi Cuenta" },
  { id: "orders", label: "Mis Pedidos" },
  { id: "wishlist", label: "Mi Lista de Deseos" },
  { id: "accountInfo", label: "Información de la Cuenta" },
  { id: "paymentMethods", label: "Métodos de Pago Almacenados" },
  { id: "subscriptions", label: "Suscripciones al Boletín Informativo" },
];

const AdminDashboard = () => {
  const [selectedItem, setSelectedItem] = useState("myAccount");

  // Renderiza el contenido según el elemento seleccionado
  const renderContent = () => {
    switch (selectedItem) {
      case "myAccount":
        return <MyAccount />;
      case "orders":
        return <div>Contenido de Mis Pedidos</div>;
      case "wishlist":
        return <div>Contenido de Mi Lista de Deseos</div>;
      case "accountInfo":
        return <div>Contenido de informacion de cuenta</div>;
      case "paymentMethods":
        return <div>Contenido de Métodos de Pago Almacenados</div>;
      case "subscriptions":
        return <div>Contenido de Suscripciones al Boletín Informativo</div>;
      default:
        return <div>Selecciona una opción del menú</div>;
    }
  };

  return (
    <div className="admin-dashboard">
      {/* Menú lateral */}
      <div className="sidebar">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className={`menu-item ${
              selectedItem === item.id ? "active" : ""
            }`}
            onClick={() => setSelectedItem(item.id)}
          >
            {item.label}
          </div>
        ))}
      </div>

      {/* Área de contenido dinámico */}
      <div className="content">{renderContent()}</div>
    </div>
  );
};

export default AdminDashboard;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import SubTitulo from "../components/SubTitulo";

const Welcome = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1500);

        return () => clearTimeout(timer);
    }, []);

    const handleAccept = () => {
        setShowWelcome(false);
        navigate("/home");
    };

    if (!showWelcome) return null;

    if (isLoading) {
        return (
            <div className="loading-container">
                <div className="loading-content">
                    <div className="loading-logo">📦</div>
                    <h1 className="loading-title">TecnoMarket</h1>
                    <div className="loading-dots">
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                        <div className="loading-dot"></div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="welcome-container">
            <div className="welcome-card">
                {/* Header con logo */}
                <div className="welcome-header">
                    <div className="welcome-logo">📦</div>
                    <h1 className="welcome-title">TecnoMarket</h1>
                    <p className="welcome-subtitle">Instituto Técnico "Nuevo Horizonte"</p>
                </div>

                {/* Subtítulo principal */}
                <div className="welcome-main-title">
                    <SubTitulo titulo="Bienvenido al Sistema de Inventario" />
                    <p className="welcome-description">
                        Gestiona tu inventario de productos tecnológicos de manera eficiente y moderna.
                    </p>
                </div>

                {/* Características destacadas */}
                <div className="feature-grid">
                    <div className="feature-card">
                        <div className="feature-icon">⚡</div>
                        <p className="feature-text">Gestión Rápida</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📈</div>
                        <p className="feature-text">Control Stock</p>
                    </div>
                </div>

                {/* Información adicional */}
                <div className="info-box">
                    <h3 className="info-title">Características principales:</h3>
                    <ul className="info-list">
                        <li>Agregar, editar y eliminar productos</li>
                        <li>Control de stock en tiempo real</li>
                    </ul>
                </div>

                {/* Botón de acción */}
                <div className="text-center">
                    <Button type="button" onClick={handleAccept} text="Ingresar al Sistema" />
                </div>
                <br />

                {/* Footer */}
                <div className="welcome-footer">
                    <center> <p className="welcome-footer-text">
                        Proyecto Académico • Feria Estudiantil 2025
                    </p></center>
                </div>
            </div>
        </div >
    );
};

export default Welcome;
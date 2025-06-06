# TecnoMarket - Sistema de Inventario

> **Sistema de gestión de inventario para productos tecnológicos desarrollado como proyecto académico para la feria estudiantil del Instituto Técnico "Nuevo Horizonte".**

## 🚀 Características Principales

- ✅ **CRUD Completo** - Crear, leer, actualizar y eliminar productos
- 📱 **Responsive Design** - Adaptable a dispositivos móviles y desktop
- ⚡ **Navegación Fluida** - SPA con React Router
- 🔍 **Gestión de Estados** - Hooks personalizados para manejo de datos
- 📝 **Formularios Validados** - Validación con React Hook Form

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React** `^18.0.0` - Librería principal para construir la interfaz
- **React Router DOM** `^6.0.0` - Navegación entre páginas
- **Vite** - Build tool y servidor de desarrollo

### Gestión de Formularios
- **React Hook Form** `^7.0.0` - Manejo eficiente de formularios y validaciones

### Notificaciones
- **React Hot Toast** `^2.0.0` - Sistema de notificaciones toast

### Herramientas de Desarrollo
- **ESLint** - Análisis de código estático
- **Vite** - Bundler y servidor de desarrollo rápido

## ⚙️ Instalación y Configuración

### Prerrequisitos
- **Node.js**
- **npm**
- **Git**

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/GabContreras/TechnoMarket.git
   cd TechnoMarket/TecnoMarket
   ```

2. **Instalar dependencias**
   ```bash
   npm i
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Navegar a `http://localhost:5173`

### Scripts Disponibles

```bash
npm run dev          # Inicia el servidor de desarrollo
```

## 🗂️ Funcionalidades del Sistema

### 📊 Dashboard Principal (`/home`)
- **Tabla de inventario**: Lista completa de productos con información detallada
- **Acciones rápidas**: Botones para editar y eliminar productos directamente

### 📝 Gestión de Productos (`/products`)
- **Agregar productos**: Formulario para registrar nuevos productos
- **Editar productos**: Modificar información de productos existentes
- **Campos disponibles**:
  - Nombre del producto
  - Categoría (Computadoras, Teléfonos, Audio, etc.)
  - Precio en dólares
  - Cantidad en stock

### 🏠 Página de Bienvenida (`/`)
- **Splash screen** con información del proyecto
- **Animaciones de carga** para mejor experiencia de usuario
- **Introducción** al sistema con características principales

## 🎨 Diseño y Experiencia de Usuario

### Tema Visual
- **Colores principales**: Tema oscuro con acentos en azul
- **Tipografía**: Segoe UI para máxima legibilidad
- **Iconos**: Emojis para compatibilidad universal

### Responsive Design
- **Desktop**: Layout completo con sidebar y contenido principal
- **Tablet**: Adaptación del grid para pantallas medianas
- **Mobile**: Diseño apilado con navegación optimizada

## 🔧 Configuración Avanzada

### Categorías de Productos
Las categorías están definidas en `src/utils/apiUrl.js`:
```javascript
export const categoryOptions = [
  { value: "computadoras", label: "Computadoras" },
  { value: "telefonos", label: "Teléfonos" },
  { value: "audio", label: "Audio" },
  { value: "monitores", label: "Monitores" },
  { value: "accesorios", label: "Accesorios" },
  { value: "gaming", label: "Gaming" },
  { value: "tablets", label: "Tablets" }
];
```

### Gestión de Estado
- **Hooks personalizados** para separar lógica de negocio
- **Estado local** con React hooks (useState, useEffect)
- **Formularios** gestionados con React Hook Form
- **Notificaciones** con React Hot Toast


**Gabriel Alejandro Contreras Cruz 20230454**

*Proyecto Académico - Instituto Técnico "Nuevo Horizonte"*

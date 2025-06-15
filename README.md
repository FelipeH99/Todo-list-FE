# 🌐 TodoList Frontend

Una aplicación web moderna en **React TypeScript** que consume la API TodoList con una interfaz de usuario intuitiva y atractiva.

## 🚀 Características

- ✅ **Interfaz moderna** con diseño responsive
- ✅ **Gestión completa** de listas y tareas
- ✅ **Interacción en tiempo real** con la API REST
- ✅ **Animaciones suaves** y transiciones
- ✅ **Manejo de errores** robusto
- ✅ **TypeScript** para mayor seguridad de tipos

## 📋 Requisitos

- **Node.js** 18+ 
- **NPM** 8+
- **API TodoList** ejecutándose en `http://localhost:3000`

## 🛠️ Instalación

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar la aplicación
```bash
npm run dev
```

La aplicación estará disponible en: **http://localhost:3001**

## 🎯 Uso

### 1. **Asegúrate de que la API esté funcionando**
```bash
# En otra terminal, desde el directorio nestjs-todolist
npm run start:dev
```

### 2. **Abre la aplicación web**
- Ve a: http://localhost:3001
- La aplicación se conectará automáticamente a la API

### 3. **Funcionalidades disponibles**

#### 📋 **Gestión de Listas**
- **Crear nueva lista:** Usa el formulario en la barra lateral
- **Seleccionar lista:** Haz clic en cualquier lista para ver sus tareas
- **Visualizar estadísticas:** Ve el número de tareas pendientes y completadas

#### ✅ **Gestión de Tareas**
- **Agregar tarea:** Usa el formulario en la parte superior
- **Completar tarea:** Haz clic en el círculo junto a la tarea
- **Eliminar tarea:** Haz clic en el icono de basura
- **Ver histórico:** Las tareas se organizan en pendientes y completadas

## 🎨 Interfaz de Usuario

### **Diseño Moderno**
- Gradientes de color atractivos
- Efectos de transparencia y blur
- Animaciones suaves en hover y transiciones
- Iconos emoji para mejor UX

### **Responsive Design**
- Optimizado para desktop y mobile
- Barra lateral colapsable en dispositivos móviles
- Diseño adaptativo

### **Estados de la Aplicación**
- **Estado de carga:** Indicadores mientras se cargan los datos
- **Estados vacíos:** Mensajes amigables cuando no hay contenido
- **Manejo de errores:** Mensajes informativos para el usuario

## 🔧 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Iniciar servidor de desarrollo

# Producción
npm run build        # Construir para producción
npm run preview      # Previsualizar build de producción

# Calidad de código
npm run lint         # Verificar código con ESLint
```

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── TodoListComponent.tsx
│   ├── TodoItemComponent.tsx
│   └── CreateTodoListForm.tsx
├── services/           # Servicios API
│   └── api.ts
├── types.ts           # Definiciones TypeScript
├── App.tsx           # Componente principal
├── App.css          # Estilos principales
├── index.css        # Estilos globales
└── main.tsx         # Punto de entrada
```

## 🌐 Configuración de API

La aplicación está configurada para conectarse a:
- **Backend:** `http://localhost:3000`
- **Proxy de desarrollo:** Configurado en `vite.config.ts`

Si necesitas cambiar la URL de la API, edita el archivo `src/services/api.ts`:

```typescript
const API_BASE_URL = 'http://tu-nueva-url:puerto/api';
```

## ⚡ Tecnologías Utilizadas

- **React 18** - Biblioteca principal
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo
- **Axios** - Cliente HTTP
- **CSS3** - Estilos modernos con gradientes y animaciones

## 🎯 Próximas Mejoras

- [ ] Implementar drag & drop para reorden de tareas
- [ ] Agregar filtros y búsqueda
- [ ] Modo oscuro/claro
- [ ] Notificaciones push
- [ ] Persistencia offline

## 📱 Capturas de Pantalla

La aplicación incluye:
- **Barra lateral** con lista de TodoLists
- **Área principal** con tareas de la lista seleccionada
- **Formularios intuitivos** para crear listas y tareas
- **Estados visuales** diferentes para tareas completadas/pendientes

## 🤝 Integración con la API

Esta aplicación funciona perfectamente con la API TodoList implementada en NestJS. Asegúrate de que ambos proyectos estén ejecutándose simultáneamente para una experiencia completa.

---

¡Disfruta gestionando tus tareas con esta moderna interfaz web! 🎉 
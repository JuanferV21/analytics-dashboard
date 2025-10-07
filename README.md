# 📊 AnalyticsPro Dashboard

Un dashboard de analítica moderno y profesional construido con React, Vite, TailwindCSS y Recharts. Diseño tipo SaaS minimalista, completamente responsive con soporte para modo claro/oscuro.

![Analytics Dashboard](https://img.shields.io/badge/React-18.3-blue) ![Vite](https://img.shields.io/badge/Vite-6.0-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-cyan)

## ✨ Características

- 📈 **Gráficas interactivas** con Recharts (líneas, barras)
- 🎨 **Diseño profesional** estilo SaaS (inspirado en Vercel/Linear)
- 🌓 **Dark/Light mode** funcional con persistencia
- 📱 **Totalmente responsive** (desktop, tablet, móvil)
- ✨ **Animaciones suaves** con Framer Motion
- 🎯 **Componentes modulares** bien organizados
- 🔍 **Sidebar colapsable** con navegación
- 📊 **Métricas en tiempo real** con tarjetas de resumen
- 📋 **Tabla de transacciones** con estados visuales
- 🎭 **Iconos elegantes** con Lucide React

## 🚀 Demo

El dashboard incluye:
- Tarjetas de métricas (Revenue, Users, Conversion Rate, Avg. Order Value)
- Gráfica de líneas: Ventas mensuales
- Gráfica de barras: Usuarios activos por semana
- Tabla de transacciones recientes

## 🛠️ Tecnologías

- **Framework**: React 18 + Vite 6
- **Estilos**: TailwindCSS + shadcn/ui patterns
- **Gráficas**: Recharts
- **Iconos**: Lucide React
- **Animaciones**: Framer Motion
- **Utilidades**: clsx, tailwind-merge

## 📦 Instalación

```bash
# Clonar o navegar al proyecto
cd analytics-dashboard

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

## 🏃‍♂️ Scripts Disponibles

```bash
npm run dev        # Inicia el servidor de desarrollo
npm run build      # Construye para producción
npm run preview    # Preview de la build de producción
npm run lint       # Ejecuta ESLint
```

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
│   ├── ui/             # Componentes UI base (Card, Button)
│   ├── Sidebar.jsx     # Barra lateral con navegación
│   ├── Header.jsx      # Header con búsqueda y acciones
│   ├── MetricCard.jsx  # Tarjetas de métricas
│   └── TransactionsTable.jsx
├── pages/              # Páginas de la aplicación
│   ├── Dashboard.jsx   # Página principal del dashboard
│   └── PlaceholderPage.jsx
├── data/               # Datos simulados
│   └── dashboardData.js
├── hooks/              # Custom hooks
│   └── useTheme.js     # Hook para dark/light mode
├── lib/                # Utilidades
│   └── utils.js        # Función cn() para clases
├── App.jsx             # Componente principal
├── main.jsx            # Entry point
└── index.css           # Estilos globales + Tailwind
```

## 🎨 Paleta de Colores

El proyecto utiliza un sistema de colores basado en variables CSS HSL:

- **Primary**: Violeta vibrante (`hsl(262 83% 58%)`)
- **Background**: Blanco / Gris oscuro
- **Foreground**: Gris oscuro / Blanco
- **Muted**: Grises neutros para texto secundario
- **Border**: Bordes sutiles y elegantes

## 🌈 Dark/Light Mode

El tema se guarda en `localStorage` y se aplica automáticamente. Toggle disponible en el header.

## 📊 Datos Simulados

Los datos están en `src/data/dashboardData.js` e incluyen:
- Tarjetas de métricas
- Ventas mensuales (12 meses)
- Usuarios activos semanales
- Transacciones recientes
- Distribución por categorías
- Fuentes de tráfico

## 🎯 Próximas Mejoras

- [ ] Agregar más tipos de gráficas (dona, área)
- [ ] Implementar filtros por fecha
- [ ] Exportar reportes a PDF/CSV
- [ ] Integración con API real
- [ ] Sistema de notificaciones
- [ ] Multi-idioma (i18n)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado con ❤️ como proyecto de portafolio profesional.

---

⭐ Si te gusta este proyecto, ¡dale una estrella en GitHub!

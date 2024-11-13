# People CRUD

## Descripción

People CRUD es una aplicación desarrollada en React que permite realizar operaciones CRUD (Crear, Leer, Actualizar y Eliminar) sobre una lista de personas. El objetivo principal de este proyecto es proporcionar una solución sencilla y funcional para gestionar datos de manera eficiente, utilizando tecnologías modernas del ecosistema de desarrollo frontend.

---

## Características principales

- **Operaciones CRUD completas:**
  - Crear nuevos registros de personas.
  - Leer y visualizar información detallada.
  - Editar registros existentes.
  - Eliminar registros de manera segura.

- **Interfaz amigable:**
  - Utiliza Bootstrap y React-Bootstrap para un diseño responsivo y atractivo.

- **Rendimiento optimizado:**
  - Implementación eficiente gracias a React.

---

## Tecnologías utilizadas

### Frontend
- **React**: Biblioteca principal para la construcción de la interfaz de usuario.
- **React Router DOM**: Manejo de rutas dentro de la aplicación.
- **React-Bootstrap**: Componentes estilizados para una interfaz moderna.
- **Bootstrap**: Framework CSS para un diseño responsivo.
- **Bootstrap Icons**: Iconografía utilizada en la aplicación.

### Backend y API
- **Axios**: Cliente HTTP para consumir APIs.

### Desarrollo y Configuración
- **TypeScript**: Lenguaje tipado para mayor seguridad y escalabilidad en el desarrollo.
- **ESLint**: Configuración de estilo y calidad de código.
- **React Scripts**: Scripts preconfigurados para construir y servir la aplicación.
- **Web Vitals**: Monitoreo de rendimiento.

---

## Configuración inicial

### Requisitos
- Node.js (v16 o superior)
- npm o Yarn como gestor de paquetes

### Instalación

1. Clona el repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd people-crud
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o si usas Yarn
   yarn install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```bash
   npm start
   # o si usas Yarn
   yarn start
   ```

La aplicación estará disponible en `http://localhost:3000`.

---

## Estructura del proyecto

```plaintext
people-crud/
├── src/
│   ├── components/       # Componentes reutilizables
│   ├── pages/            # Vistas principales
│   ├── services/         # Lógica de acceso a la API
│   ├── App.tsx           # Punto de entrada principal
│   └── index.tsx         # Renderizado de React
├── public/               # Recursos públicos
├── package.json          # Dependencias y scripts
├── tsconfig.json         # Configuración de TypeScript
└── README.md             # Documentación
```

---

## Scripts disponibles

- `npm start`: Inicia la aplicación en modo desarrollo.
- `npm build`: Construye la aplicación para producción.
- `npm test`: Ejecuta las pruebas unitarias.
- `npm eject`: Expone la configuración interna de React Scripts.

---

## Contribución

¡Las contribuciones son bienvenidas! Si deseas colaborar:

1. Haz un fork del proyecto.
2. Crea una rama para tu funcionalidad o corrección:
   ```bash
   git checkout -b feature/nueva-funcionalidad
   ```
3. Realiza tus cambios y sube tu rama:
   ```bash
   git push origin feature/nueva-funcionalidad
   ```
4. Abre un Pull Request detallando los cambios realizados.

---

## Licencia

Este proyecto está bajo la licencia [MIT](./LICENSE).

---

## Contacto

Si tienes preguntas o sugerencias, no dudes en contactarnos:
- Email: p.reynoso.mena@gmail.com
- GitHub: [Repositorio del proyecto](https://github.com/usuario/people-crud)


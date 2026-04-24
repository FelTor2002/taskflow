# TaskFlow

> Aplicación de gestión de tareas moderna, bilingüe y responsive construida con Angular + TypeScript.

[🇪🇸 Español](#-español) | [🇺🇸 English](#-english)

---

## 🇪🇸 Español

### Descripción
**TaskFlow** es un proyecto de portafolio orientado a frontend, arquitectura limpia y UX.
Incluye una interfaz tipo SaaS con tema oscuro, flujo CRUD completo, filtros, persistencia en LocalStorage y experiencia bilingüe.

### Demo local
- URL: `http://localhost:4200` (o `http://localhost:4300` si 4200 está ocupado)

### Live demo
- Vercel: [https://taskflow-nu-mocha.vercel.app](https://taskflow-nu-mocha.vercel.app)

### Autor
**Felipe Torres**

### Funcionalidades principales
- Gestión de tareas (CRUD):
  - Crear tarea
  - Editar tarea
  - Eliminar tarea
  - Completar / Reabrir tarea
- Modelo de tarea:
  - `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`
- Filtros y búsqueda:
  - Búsqueda por título o descripción
  - Filtro por estado
  - Filtro por prioridad
  - Orden por fecha de creación o vencimiento
- Persistencia:
  - Guardado automático en **LocalStorage**
  - Restauración al recargar
- Internacionalización (i18n):
  - Español / Inglés
  - Etiquetas de UI, estados y prioridades traducidas
- UX/UI:
  - Tema oscuro estilo productivity SaaS
  - Modal para crear/editar tareas
  - Confirmación antes de eliminar
  - Animaciones suaves de modal
  - Diseño responsive (desktop, tablet, móvil)
- Validaciones:
  - Validaciones explícitas en modo **crear**
  - Edición sin validaciones intrusivas

### Stack tecnológico
- Angular (componentes standalone)
- TypeScript
- CSS moderno (variables, layout responsive, modal animations)
- Reactive Forms
- LocalStorage

### Estructura del proyecto
```text
src/
  app/
    components/
      task-card/
      task-filters/
      task-form/
    i18n/
      translations.ts
    models/
      interfaces/
        task.model.ts
    services/
      i18n.service.ts
      task.service.ts
    app.ts
    app.html
    app.css
  styles.css
vercel.json
```

### Instalación
```bash
npm install
```

### Ejecutar en local
```bash
npm start
```

### Build
```bash
npm run build
```

### Tests
```bash
npx ng test --watch=false
```

### Flujo de ramas y commits recomendado
Se está usando un enfoque tipo **GitHub Flow + Conventional Commits**:
- Ramas por propósito: `feat/*`, `fix/*`, `docs/*`, `chore/*`
- Commits claros: `feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`, `merge: ...`
- PR por cambio acotado

### Mejoras futuras
- Drag & drop para reordenar tareas
- Etiquetas y filtros inteligentes
- Integración con backend real
- Autenticación y roles
- Mayor cobertura de tests automatizados

---

## 🇺🇸 English

<details>
  <summary>Open English version</summary>

### Description
**TaskFlow** is a portfolio project focused on frontend quality, clean architecture, and UX.
It includes a modern SaaS-like dark UI with full CRUD flow, filtering, LocalStorage persistence, and bilingual support.

### Local demo
- URL: `http://localhost:4200` (or `http://localhost:4300` if port 4200 is busy)

### Live demo
- Vercel: [https://taskflow-nu-mocha.vercel.app](https://taskflow-nu-mocha.vercel.app)

### Author
**Felipe Torres**

### Main features
- Full task CRUD (create, edit, delete, complete/reopen)
- Task model: `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`
- Search and filters (title/description, status, priority)
- Sorting (created date and due date)
- LocalStorage persistence and restore on reload
- Bilingual UI (Spanish/English) for labels, statuses, priorities
- Modal-based create/edit workflow
- Delete confirmation dialog
- Smooth modal animations
- Responsive layout (desktop, tablet, mobile)
- Explicit validations in create mode; non-intrusive edit mode

### Tech stack
- Angular (standalone components)
- TypeScript
- Modern CSS
- Reactive Forms
- LocalStorage

### Setup
```bash
npm install
npm start
```

### Build and test
```bash
npm run build
npx ng test --watch=false
```

</details>

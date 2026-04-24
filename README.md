# TaskFlow

Professional Angular + TypeScript task manager for portfolio use, focused on clean architecture, CRUD workflows, local persistence, responsive UI, and bilingual experience (ES/EN).

Aplicación profesional de gestión de tareas con Angular + TypeScript para portafolio, enfocada en arquitectura limpia, flujos CRUD, persistencia local, UI responsive y experiencia bilingüe (ES/EN).

## Demo

- Live demo (placeholder): `https://taskflow-demo.vercel.app`

## Author

- Felipe Torres

## Tech Stack

- Angular 21
- TypeScript
- Reactive Forms
- Modern CSS (dark SaaS-style UI)
- LocalStorage

## Features (EN)

- Full CRUD task management: create, edit, delete, complete/reopen
- Task model with `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`
- Search by title/description
- Filters by status and priority
- Sorting by creation date and due date
- Persistent state in LocalStorage
- Built-in language switcher (`ES` / `EN`)
- Responsive layout for desktop, tablet, and mobile
- Confirmation dialog before deleting

## Funcionalidades (ES)

- CRUD completo de tareas: crear, editar, eliminar, completar/reabrir
- Modelo de tarea con `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`
- Búsqueda por título y descripción
- Filtros por estado y prioridad
- Ordenamiento por fecha de creación y fecha límite
- Persistencia en LocalStorage
- Selector de idioma integrado (`ES` / `EN`)
- Diseño responsive para desktop, tablet y móvil
- Confirmación antes de eliminar

## Project Structure

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
```

## Installation

```bash
npm install
```

## Development Commands

```bash
# Run dev server
npm run start

# Production build
npm run build

# Unit tests
npm run test
```

## Build

```bash
npm run build
```

Build output:

- `dist/taskflow/browser`

## Vercel Deploy

1. Push this project to GitHub.
2. Import repository in Vercel.
3. Use:
   - Framework preset: `Other`
   - Build command: `npm run build`
   - Output directory: `dist/taskflow/browser`
4. Deploy.

## Future Improvements

- Drag and drop task ordering
- Advanced analytics dashboard
- Tag system and smart filters
- Cloud sync with backend auth
- Automated test suite expansion (service + component interaction)

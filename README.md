# TaskFlow

Professional Angular + TypeScript task manager for portfolio use, focused on clean architecture, CRUD workflows, local persistence, responsive UI, and bilingual experience (ES/EN).

Aplicación profesional de gestión de tareas con Angular + TypeScript para portafolio, enfocada en arquitectura limpia, flujos CRUD, persistencia local, interfaz responsive y experiencia bilingüe (ES/EN).

## Author

- Felipe Torres

## Demo

- Production URL: `https://taskflow-nu-mocha.vercel.app`

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
- Modal workflow for create/edit
- Validation rules shown in create mode (with hints and character counters)
- Edit mode without blocking validation hints to keep UX smoother
- Responsive layout for desktop, tablet, and mobile

## Funcionalidades (ES)

- CRUD completo de tareas: crear, editar, eliminar, completar/reabrir
- Modelo de tarea con `id`, `title`, `description`, `status`, `priority`, `dueDate`, `createdAt`
- Búsqueda por título y descripción
- Filtros por estado y prioridad
- Ordenamiento por fecha de creación y fecha límite
- Persistencia en LocalStorage
- Selector de idioma integrado (`ES` / `EN`)
- Flujo de creación/edición con modal
- Validaciones visibles en modo crear (con ayudas y contador de caracteres)
- Edición sin mensajes de validación intrusivos para una UX más limpia
- Diseño responsive para desktop, tablet y móvil

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
vercel.json
```

## Installation

```bash
npm install
```

## Development

```bash
# Run dev server
npm run start

# Build
npm run build

# Tests
npm run test
```

## Build Output

- `dist/taskflow/browser`

## Deploy on Vercel

The project includes `vercel.json` and is ready to deploy:

1. Link/import repository in Vercel.
2. Build command: `npm run build`
3. Output directory: `dist/taskflow/browser`
4. Deploy.

## Future Improvements

- Drag and drop task ordering
- Advanced analytics dashboard
- Tag system and smart filters
- Cloud sync with backend auth
- Expanded automated tests (services + components)

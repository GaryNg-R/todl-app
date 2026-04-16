# Todo App — Project Progress

## Summary

- **Phase:** Design
- **Last done:** Design spec written and approved (`docs/superpowers/specs/2026-04-15-todo-app-design.md`)
- **Next action:** Write implementation plan, then begin incremental development

---

## Task List

### Phase 1 — Design
- [x] Brainstorm and define requirements
- [x] Choose tech stack (React + Vite frontend, Node/Express backend, JSON file storage)
- [x] Design data model, API, and UI layout
- [x] Write and approve design spec

### Phase 2 — Implementation Plan
- [ ] Break design into small, commit-sized implementation tasks
- [ ] Write implementation plan doc

### Phase 3 — Backend
- [ ] Initialize Node/Express project in `backend/`
- [ ] Set up `todos.json` auto-creation
- [ ] Implement `GET /api/todos`
- [ ] Implement `POST /api/todos`
- [ ] Implement `PUT /api/todos/:id`
- [ ] Implement `DELETE /api/todos/:id`

### Phase 4 — Frontend
- [ ] Initialize React + Vite project in `frontend/`
- [ ] Set up Vite proxy for `/api`
- [ ] Build `App.jsx` with state and API calls
- [ ] Build `TodoForm.jsx` (add/edit modal)
- [ ] Build `TodoItem.jsx` (card with inline status change)
- [ ] Build `TodoList.jsx` (sorted/filtered list)
- [ ] Build `FilterSort.jsx` (filter and sort controls)

### Phase 5 — Polish & Wiring
- [ ] Connect frontend to backend end-to-end
- [ ] Add error banner for unreachable backend
- [ ] Style all components (minimal/clean, priority left border colors)
- [ ] Manual smoke test

### Phase 6 — Done
- [ ] Push all commits to GitHub
- [ ] Update `small-projects/PROGRESS.md` to mark as completed

---

## Commit Log

| Date | Commit | Description |
|------|--------|-------------|
| 2026-04-15 | *(pending git setup)* | Initial design spec |

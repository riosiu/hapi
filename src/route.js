import {
  addNoteHandlers,
  deleteNoteByIdHandlers,
  editNoteByIdHandlers,
  getAllNotesHandlers,
  getNoteByIdHandlers,
} from "./handlers.js";

export const routes = [
  {
    method: "POST",
    path: "/notes",
    handler: addNoteHandlers,
  },
  {
    method: "GET",
    path: "/notes",
    handler: getAllNotesHandlers,
  },
  {
    method: "GET",
    path: "/notes/{id}",
    handler: getNoteByIdHandlers,
  },
  {
    method: "PUT",
    path: "/notes/{id}",
    handler: editNoteByIdHandlers,
  },
  {
    method: "DELETE",
    path: "/notes/{id}",
    handler: deleteNoteByIdHandlers,
  },
];

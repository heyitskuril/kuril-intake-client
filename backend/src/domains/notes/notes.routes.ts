import { Router } from 'express';
import { NotesController } from './notes.controller';
import { validate } from '@shared/middleware/validation';
import { authenticate, authorize } from '@shared/middleware';
import {
  createNoteSchema,
  updateNoteSchema,
  getNoteSchema,
  listNotesByClientSchema,
} from './notes.validation';

const router = Router();
const controller = new NotesController();

/**
 * @route   POST /api/notes
 * @desc    Create a new note (Admin & Assistant)
 * @access  Private (Admin, Assistant)
 */
router.post(
  '/',
  authenticate,
  authorize(['admin', 'assistant']),
  validate(createNoteSchema),
  controller.create
);

/**
 * @route   GET /api/notes/:id
 * @desc    Get note by ID
 * @access  Private
 */
router.get('/:id', authenticate, validate(getNoteSchema), controller.findById);

/**
 * @route   GET /api/notes/client/:clientId
 * @desc    Get all notes for a client
 * @access  Private
 */
router.get(
  '/client/:clientId',
  authenticate,
  validate(listNotesByClientSchema),
  controller.findByClientId
);

/**
 * @route   PUT /api/notes/:id
 * @desc    Update note (Admin & Assistant)
 * @access  Private (Admin, Assistant)
 */
router.put(
  '/:id',
  authenticate,
  authorize(['admin', 'assistant']),
  validate(updateNoteSchema),
  controller.update
);

/**
 * @route   DELETE /api/notes/:id
 * @desc    Delete note (Admin & Assistant)
 * @access  Private (Admin, Assistant)
 */
router.delete(
  '/:id',
  authenticate,
  authorize(['admin', 'assistant']),
  controller.delete
);

export default router;
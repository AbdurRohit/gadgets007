import express from 'express';
import { GadgetService } from '../services/gadget.service.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Apply JWT authentication to all routes
router.use(authenticateToken);

router.get('/', async (req, res) => {
  try {
    const { status } = req.query;
    const gadgets = await GadgetService.getAllGadgets(status);
    res.json(gadgets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const gadget = await GadgetService.createGadget(req.body);
    res.status(201).json(gadget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.patch('/:id', async (req, res) => {
  try {
    const gadget = await GadgetService.updateGadget(req.params.id, req.body);
    res.json(gadget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const gadget = await GadgetService.decommissionGadget(req.params.id);
    res.json(gadget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/:id/self-destruct', async (req, res) => {
  try {
    const { confirmationCode } = req.body;
    const gadget = await GadgetService.selfDestruct(req.params.id, confirmationCode);
    res.json(gadget);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
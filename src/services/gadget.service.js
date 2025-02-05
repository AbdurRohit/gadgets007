import { PrismaClient } from '@prisma/client';
import { generateCodename } from '../utils/codename-generator.js';

const prisma = new PrismaClient();

export class GadgetService {
  static async getAllGadgets(status = null) {
    const where = status ? { status } : {};
    const gadgets = await prisma.gadget.findMany({ where });
    
    return gadgets.map(gadget => ({
      ...gadget,
      missionSuccessProbability: Math.floor(Math.random() * 31) + 70 // 70-100%
    }));
  }

  static async createGadget(data) {
    const codename = generateCodename();
    return prisma.gadget.create({
      data: {
        ...data,
        codename
      }
    });
  }

  static async updateGadget(id, data) {
    return prisma.gadget.update({
      where: { id },
      data
    });
  }

  static async decommissionGadget(id) {
    return prisma.gadget.update({
      where: { id },
      data: {
        status: 'Decommissioned',
        decommissionedAt: new Date()
      }
    });
  }

  static async selfDestruct(id, confirmationCode) {
    // In a real system, you'd verify the confirmation code
    // For demo purposes, we'll accept any non-empty code
    if (!confirmationCode) {
      throw new Error('Confirmation code required');
    }

    return prisma.gadget.update({
      where: { id },
      data: {
        status: 'Destroyed'
      }
    });
  }
}
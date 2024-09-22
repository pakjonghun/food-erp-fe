import { idNameSchema } from '@/validations/idName';
import { positiveNumber } from '@/validations/positiveNumber';
import z from 'zod';

export const newSubsidiarySchema = z.object({
  ...idNameSchema.shape,
  categoryName: z.union([idNameSchema, z.undefined(), z.null()]).optional(),
  wonPrice: positiveNumber.optional(),
  leadTime: positiveNumber.optional(),
});

export type NewSubsidiaryForm = z.infer<typeof newSubsidiarySchema>;

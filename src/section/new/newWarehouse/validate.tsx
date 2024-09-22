import { idNameSchema } from '@/validations/idName';
import z from 'zod';

export const newWarehouseSchema = z.object({
  ...idNameSchema.shape,
  address: z
    .string()
    .min(1, { message: '주소를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  phoneNumber: z
    .string()
    .min(1, { message: '연락처를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  note: z
    .string()
    .min(1, { message: '비고를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
});

export type NewWarehouseForm = z.infer<typeof newWarehouseSchema>;

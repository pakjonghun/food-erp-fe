import { idNameSchema } from '@/validations/idName';
import { positiveNumber } from '@/validations/positiveNumber';
import z from 'zod';

export const newClientSchema = z.object({
  ...idNameSchema.shape,
  clientTypeName: z
    .union([idNameSchema, z.undefined(), z.null(), z.undefined()])
    .optional()
    .nullable(),
  isSabangService: z.union([z.undefined(), z.null(), z.boolean()]).nullable().optional(),
  feeRate: positiveNumber,
  businessName: z
    .string()
    .min(1, { message: '상호를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  businessNumber: z
    .string()
    .min(1, { message: '사업자번호를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  payDate: positiveNumber,
  manager: z
    .string()
    .min(1, { message: '관리자를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  managerTel: z
    .string()
    .min(1, { message: '연락처를 입력하세요.' })
    .optional()
    .nullable()
    .or(z.literal('')),
  inActive: z.union([z.undefined(), z.null(), z.boolean()]).nullable().optional(),
});

export type NewClientForm = z.infer<typeof newClientSchema>;

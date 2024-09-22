import { idNameSchema } from '@/validations/idName';
import z from 'zod';

export const newClientSchema = z.object({
  ...idNameSchema.shape,
  clientTypeName: z
    .union([idNameSchema, z.undefined(), z.null(), z.undefined()])
    .optional()
    .nullable(),
  isSabangService: z
    .union([z.undefined(), z.null(), z.boolean(), z.undefined(), z.null()])
    .nullable()
    .optional(),
  feeRate: z
    .union([z.number().gte(0, { message: '0보다 큰 값을 입력하세요.' }), z.null(), z.undefined()])
    .nullable()
    .optional(),
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
  payDate: z
    .union([z.number().gte(0, { message: '0보다 큰 값을 입력하세요.' }), z.null(), z.undefined()])
    .nullable()
    .optional(),
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
  inActive: z
    .union([z.undefined(), z.null(), z.boolean(), z.undefined(), z.null()])
    .nullable()
    .optional(),
});

export type NewClientForm = z.infer<typeof newClientSchema>;

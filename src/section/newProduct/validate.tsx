import { DeliveryType } from '@/graphql/codegen/graphql';
import { idNameSchema } from '@/validations/idName';
import { positiveNumber } from '@/validations/positiveNumber';
import z from 'zod';

export const newProductSchema = z.object({
  ...idNameSchema.shape,
  categoryName: z.union([idNameSchema, z.undefined(), z.null()]).optional(),
  barCode: z.string().optional(),
  wonPrice: positiveNumber.optional(),
  salePrice: positiveNumber.optional(),
  leadTime: positiveNumber.optional(),
  delivertType: z
    .enum([DeliveryType.Free, DeliveryType.Pay], {
      message: '올바른 택배 형태를 입력하세요.',
    })
    .nullable(),
});

export type NewProductForm = z.infer<typeof newProductSchema>;

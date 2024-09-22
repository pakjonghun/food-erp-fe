import { z } from 'zod';

export const positiveNumber = z
  .preprocess((v) => {
    if (v == '') {
      return undefined;
    }
    return typeof v == 'string' ? parseFloat(v) : v;
  }, z.union([z.number().gte(0, { message: '0이상의 숫자를 입력하세요.' }), z.undefined(), z.null()]))
  .optional()
  .nullable();

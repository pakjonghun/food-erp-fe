import z from 'zod';

export const idNameSchema = z.object({
  id: z.string().min(1, { message: '코드를 입력하세요.' }),
  name: z.string().min(1, { message: '이름을 입력하세요.' }),
});

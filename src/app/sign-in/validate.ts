import { z } from 'zod';

export const loginInputSchema = z.object({
  id: z
    .string()
    .min(1, { message: '아이디를 입력해주세요.' })
    .email({ message: '아이디는 이메일 형식 입니다.' }),
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .min(6, { message: '비밀번호는 6자리 이상 입니다.' }),
});

export type LoginInputType = z.infer<typeof loginInputSchema>;

import { BreadType } from '@/components/breadCrumb/type';
import { makeVar } from '@apollo/client';

export const title = makeVar('');
export const canBack = makeVar(false);
export const bread = makeVar<BreadType[]>([]);

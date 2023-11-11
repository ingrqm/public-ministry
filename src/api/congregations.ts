'use server';

import { prisma } from '@/prisma';

export type Congregation = {
  id: number;
  name: string;
};

export async function list() {
  const congregations = await prisma.congregation.findMany();

  return congregations.map(({ id, name }) => ({ id, name }));
}

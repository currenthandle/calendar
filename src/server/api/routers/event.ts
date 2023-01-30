import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  // getAll: protectedProcedure.query(({ ctx }) => {
  getAll: publicProcedure.query(({ ctx }) => {
    // console.log("ctx.prisma", ctx.prisma);
    return ctx.prisma.event.findMany();
  }),
});

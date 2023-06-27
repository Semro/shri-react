import { RootState } from "@/redux/store";

export const getTicketAmount = (state: RootState, id: string) =>
  state.cart[id] || 0;

export const getTicketSummary = (state: RootState) =>
  Object.values(state.cart).reduce((acc, ticket) => acc + ticket, 0);

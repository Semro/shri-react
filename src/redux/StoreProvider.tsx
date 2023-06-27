"use client";

import React, { FunctionComponent, PropsWithChildren } from "react";
import { Provider } from "react-redux";

import { store } from "@/redux/store";

export const StoreProvider: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <Provider store={store}>{children}</Provider>;
};

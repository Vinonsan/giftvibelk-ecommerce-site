"use client";

import { isRejectedWithValue, type Middleware } from "@reduxjs/toolkit";
import { clearAdminSession } from "@/lib/auth/session";

type ApiErrorPayload = {
  status?: number | string;
  data?: unknown;
};

type RejectedAction = {
  type: string;
  payload?: ApiErrorPayload;
};

export const apiMiddleware: Middleware = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    const { status, data } = (action as RejectedAction).payload ?? {};

    console.warn("[API Error]", {
      status,
      data,
      actionType: (action as RejectedAction).type,
    });

    if (status === 401) {
      clearAdminSession();
      window.location.href = "/login";
    }
  }

  return next(action);
};

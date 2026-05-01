"use client";

import { useActionState } from "react";
import { unlockSite } from "./actions";

const initialState = {
  error: "",
};

export default function EnterForm({ redirectTo }) {
  const [state, formAction, pending] = useActionState(
    unlockSite,
    initialState,
  );

  return (
    <form className="entryForm" action={formAction}>
      <input type="hidden" name="redirectTo" value={redirectTo} />
      <label className="entryLabel" htmlFor="site-password">
        Site Password
      </label>
      <input
        id="site-password"
        className="entryInput"
        name="password"
        type="password"
        autoComplete="current-password"
        placeholder="Enter password"
        required
      />
      <p className="entryError" aria-live="polite">
        {state.error}
      </p>
      <button className="button entryButton" type="submit" disabled={pending}>
        {pending ? "Checking..." : "Enter Site"}
      </button>
    </form>
  );
}

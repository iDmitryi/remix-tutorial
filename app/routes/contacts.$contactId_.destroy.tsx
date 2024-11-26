import { redirect } from "@remix-run/node";
import invariant from "tiny-invariant";
import { deleteContact } from "~/data";
import type { ActionFunctionArgs } from "@remix-run/node";

export const action = async ({ params }: ActionFunctionArgs) => {
  invariant(params.contactId, "No contact ID provided");

  await deleteContact(params.contactId);

  return redirect("/");
};

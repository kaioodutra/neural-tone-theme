import { loggerError, Logger } from "./logger";

const isError = true;
const level = isError ? "error" : "info";
const message = "Unexpected error occurred";
const err = new Error("Something broke");
const companyId = "abc123";
const rest = { userId: 42 };

loggerError[level as keyof Logger](message, {
  internalCode: "SRV-500",
  statusCode: 500,
  metadata: err?.stack || err.message,
  companyId,
  ...rest,
});

if (level === "error" && !!err) {
  console.log("A serious error happened!");
}

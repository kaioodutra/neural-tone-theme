export interface Logger {
  info: (msg: string, meta?: unknown) => void;
  error: (msg: string, meta?: unknown) => void;
}

export const loggerError: Logger = {
  info: console.log,
  error: console.error,
};

enum Types {
  success,
  info,
  error,
}
export type ToastifyProps = {
  type: keyof typeof Types,
  title?: string,
  message?: string,
};

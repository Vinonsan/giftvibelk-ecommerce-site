export function createApiTransformer<TInput, TOutput>(
  transform: (value: TInput) => TOutput,
) {
  return (value: TInput): TOutput => transform(value)
}

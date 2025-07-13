export class UnauthorizedError extends Error {
  constructor() {
    // nn consegui pensar numa descrição melhor : P
    super('Unauthorized Error')
  }
}

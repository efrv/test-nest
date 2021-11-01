class CreateCounterpartsElementDto {
  readonly name: string;
  readonly code: string;
}
export class CreateCounterpartsDto {
  readonly counterparts: [CreateCounterpartsElementDto];
}

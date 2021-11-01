class UpdateCounterpartsElementDto {
  readonly id: number;
  readonly name: string;
  readonly code: string;
}

export class UpdateCounterpartsDto {
  readonly counterparts: [UpdateCounterpartsElementDto];
}

import { v7 as uuidv7, validate as isUuid } from 'uuid';

export class UniqueEntityId {
  public readonly value: string;

  constructor(value?: string) {
    const id = value ?? uuidv7();

    if (!isUuid(id)) {
      throw new Error('Invalid entity id.');
    }

    this.value = id;
  }

  public equals(other?: UniqueEntityId): boolean {
    return !!other && this.value === other.value;
  }

  public toString(): string {
    return this.value;
  }
}

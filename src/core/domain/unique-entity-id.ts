import { v7 as uuid } from "uuid";

export class UniqueEntityId {
    private readonly value: string;

    constructor(id?: string) {
        this.value = id ?? uuid();
    }

    toString(): string {
        return this.value;
    }

    equals(other: UniqueEntityId): boolean {
        return this.value === other.value;
    }
}
import { UniqueEntityId } from "./unique-entity-id";

interface EntityProps {}

export abstract class Entity<Props extends EntityProps> {
    protected readonly _id: UniqueEntityId;

    protected props: Props;

    protected constructor(
        props: Props,
        id?: UniqueEntityId,
    ) {
        this._id = id ?? new UniqueEntityId();

        this.props = props;
    }

    get id() {
        return this._id;
    }

    equals(entity?: Entity<Props>) {
        if (!entity) return false;

        return this.id.equals(entity.id);
    }
}
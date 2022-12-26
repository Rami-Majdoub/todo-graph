import { store, BigInt } from '@graphprotocol/graph-ts'
import {
  TaskCreated as TaskCreatedEvent,
  TaskDeleted as TaskDeletedEvent,
  TaskToggledCompleted as TaskToggledEvent
} from "../generated/Todo/Todo"
import { Todo } from "../generated/schema"

export function handleTaskCreated(event: TaskCreatedEvent): void {
  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  const id = event.params._id.minus(BigInt.fromString("1")).toString()
  const entity = new Todo(id)
  entity.from = event.params._from
  entity.done = false
  entity.content = event.params._content;

  // Entities can be written to the store with `.save()`
  entity.save()
}

export function handleTaskDeleted(event: TaskDeletedEvent): void {
    // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  const id = event.params._id.toString()
  store.remove('Todo', id)
}

export function handleTaskToggledCompleted(event: TaskToggledEvent): void {
  const id = event.params._id.toString()
  let entity = Todo.load(id)

  if(entity) {
    entity.done = event.params._completed
    entity.save()
  }
}

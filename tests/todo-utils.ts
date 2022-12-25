import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  TaskCreated,
  TaskDeleted,
  TaskToggledCompleted
} from "../generated/Todo/Todo"

export function createTaskCreatedEvent(
  _from: Address,
  _id: BigInt,
  _content: string,
  _completed: boolean
): TaskCreated {
  let taskCreatedEvent = changetype<TaskCreated>(newMockEvent())

  taskCreatedEvent.parameters = new Array()

  taskCreatedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  taskCreatedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  taskCreatedEvent.parameters.push(
    new ethereum.EventParam("_content", ethereum.Value.fromString(_content))
  )
  taskCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_completed",
      ethereum.Value.fromBoolean(_completed)
    )
  )

  return taskCreatedEvent
}

export function createTaskDeletedEvent(
  _from: Address,
  _id: BigInt
): TaskDeleted {
  let taskDeletedEvent = changetype<TaskDeleted>(newMockEvent())

  taskDeletedEvent.parameters = new Array()

  taskDeletedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  taskDeletedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return taskDeletedEvent
}

export function createTaskToggledCompletedEvent(
  _from: Address,
  _id: BigInt,
  _content: string,
  _completed: boolean
): TaskToggledCompleted {
  let taskToggledCompletedEvent = changetype<TaskToggledCompleted>(
    newMockEvent()
  )

  taskToggledCompletedEvent.parameters = new Array()

  taskToggledCompletedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  taskToggledCompletedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  taskToggledCompletedEvent.parameters.push(
    new ethereum.EventParam("_content", ethereum.Value.fromString(_content))
  )
  taskToggledCompletedEvent.parameters.push(
    new ethereum.EventParam(
      "_completed",
      ethereum.Value.fromBoolean(_completed)
    )
  )

  return taskToggledCompletedEvent
}

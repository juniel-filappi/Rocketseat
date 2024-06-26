import { faker } from '@faker-js/faker'
import {
  Notification,
  NotificationProps,
} from '@/domain/notification/enterprise/entities/notification'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export function makeNotification(
  override: Partial<NotificationProps> = {},
  id?: UniqueEntityID,
) {
  return Notification.create(
    {
      title: faker.lorem.sentence(4),
      content: faker.lorem.sentence(10),
      recipientId: new UniqueEntityID(),
      ...override,
    },
    id,
  )
}

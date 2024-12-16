import { Attachment as PrismaAttachment } from '@prisma/client'
import { QuestionAttachment } from '@/domain/forum/enterprise/entities/question-attachment'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export class PrismaQuestionAttachmentMapper {
  static toDomain(raw: PrismaAttachment): QuestionAttachment {
    if (!raw.questionId) {
      throw new Error('Invalid comment type.')
    }

    return QuestionAttachment.create(
      {
        questionId: new UniqueEntityID(raw.questionId),
        attachmentId: new UniqueEntityID(raw.id),
      },
      new UniqueEntityID(raw.id),
    )
  }
}
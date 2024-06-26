import { AnswerCommentsRepository } from '@/domain/forum/application/repositories/answer-comments-repository'

interface DeleteAnswerCommentUseCaseRequest {
  authorId: string
  answerCommentId: string
}

interface DeleteAnswerCommentUseCaseResponse {}

export class DeleteAnswerCommentUseCase {
  constructor(private answerCommentRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentUseCaseRequest): Promise<DeleteAnswerCommentUseCaseResponse> {
    const answerComment =
      await this.answerCommentRepository.findById(answerCommentId)

    if (!answerComment) {
      throw new Error('Answer Comment not found')
    }

    if (answerComment.authorId.toString() !== authorId) {
      throw new Error('Not authorized')
    }

    await this.answerCommentRepository.delete(answerComment)

    return {}
  }
}
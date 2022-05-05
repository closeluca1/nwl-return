import { SubmitFeedbackCase } from "./submit-feedback-service";

describe('Submit feedback', () => {
  it('should be able to submit a feedback', async () => {
    const submitFeedback = new SubmitFeedbackCase(
      { create: async () => {} },
      { sendMail: async () => {} }
    );

    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example comment',
      screenshot: 'test.jpg'
    })).resolves.not.toThrow();
  });
});
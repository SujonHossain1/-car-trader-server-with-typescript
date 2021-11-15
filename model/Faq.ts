import { model, Schema } from 'mongoose';
import { IFaq } from 'types';

const faqSchema = new Schema<IFaq>({
    question: {
        type: String,
        required: true,
    },
    answer: {
        type: String,
        required: true,
    },
});

const Faq = model<IFaq>('Faq', faqSchema);
export default Faq;

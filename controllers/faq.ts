import { Request, Response } from 'express';
import Faq from 'model/Faq';

/**
 * METHOD: POST
 * @api {post} /api/faq -> Create FAQ
 * @apiName createFaq
 */
export const createFaq = async (req: Request, res: Response) => {
    const { body } = req;

    try {
        const faq = await Faq.create(body);
        res.status(201).json({
            success: true,
            data: faq,
            message: 'Faq created successfully',
        });
    } catch (error) {
        const { message } = error as Error;
        res.status(201).json({
            success: false,
            data: null,
            message,
        });
    }
};

/**
 * METHOD: GET
 * @api {get} /api/faq -> Get All FAQs
 * @apiName getAllFaqs
 */
export const getAllFaqs = async (req: Request, res: Response) => {
    try {
        const faqs = await Faq.find({});
        res.status(200).json({
            success: true,
            data: faqs,
            message: '',
        });
    } catch (error) {
        const { message } = error as Error;
        res.status(200).json({
            success: false,
            data: null,
            message,
        });
    }
};

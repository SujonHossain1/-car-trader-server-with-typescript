import { Request, Response } from 'express';
import Car from 'model/Car';

/**
 * METHOD: POST
 * @api {post} /api/car -> Create Car Item
 * @apiName createCarItem
 */
export const createCarItem = async (req: Request, res: Response) => {
    const { body } = req;
    try {
        const car = await Car.create(body);
        res.status(200).json({
            success: true,
            data: car,
            message: 'Car item created successfully',
        });
    } catch (error) {
        const { message } = error as Error;
        res.status(400).json({
            success: false,
            data: null,
            message,
        });
    }
};

/**
 * METHOD: GET
 * @api {get} /api/car -> Get All Car Items
 * @apiName getAllCarItems
 */
export const getAllCarItems = async (req: Request, res: Response) => {
    try {
        const cars = await Car.find({});
        res.status(200).json({
            success: true,
            data: cars,
            message: '',
        });
    } catch (error) {
        const { message } = error as Error;
        res.status(404).json({
            success: false,
            data: null,
            message,
        });
    }
};

/**
 * METHOD: GET
 * @api {get} /api/car/:id -> Get Car Item By Id
 * @apiName getCarItemById
 */
export const getCarItemById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const car = await Car.findOne({ _id: id });
        res.status(200).json({
            success: true,
            data: car,
            message: 'Car item retrieved successfully',
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            data: null,
            message: 'Car item could not be retrieved',
        });
    }
};

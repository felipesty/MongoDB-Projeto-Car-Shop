import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request, res: Response<ICar>) {
    const { status, model, year, color, buyValue, doorsQty, seatsQty } = req.body;
    const car = { status, model, year, color, buyValue, doorsQty, seatsQty };
    const results = await this._service.create(car);
    if (!results) {
      return res.status(400).send();
    }
    if (!seatsQty) {
      return res.status(400).json();
    }
    return res.status(201).json(results);
  }
} 

export default CarController;

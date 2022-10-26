import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request, res: Response<ICar>) {    
    const results = await this._service.create(req.body);
    
    return res.status(201).json(results);
  }

  async read(req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }
} 

export default CarController;

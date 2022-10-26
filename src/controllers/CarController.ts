import { Request, Response } from 'express';
import IService from '../interfaces/IService';
import { ICar } from '../interfaces/ICar';

class CarController {
  constructor(private _service: IService<ICar>) {}

  async create(req: Request, res: Response<ICar>) {    
    const results = await this._service.create(req.body);
    
    return res.status(201).json(results);
  }

  async read(_req: Request, res: Response<ICar[]>) {
    const result = await this._service.read();
    return res.status(200).json(result);
  }

  async readOne(req: Request, res: Response<ICar>) {
    const result = await this._service.readOne(req.params.id);
    return res.status(200).json(result);
  }

  async update(req: Request, res: Response<ICar>) {
    const result = await this._service.update(req.params.id, req.body);
    return res.status(200).json(result);
  }

  public async delete(req: Request, res: Response<ICar>) {
    const result = await this._service.delete(req.params.id);
    return res.status(204).json(result);
  }
} 

export default CarController;

import * as sinon from 'sinon';
import chai from 'chai';
import { carMock, carMockId } from '../../mocks/carMock';
import { ZodError } from 'zod';
import ErrorTypes from '../../../errors/catalog';
import CarModel from '../../../models/CarModel';
import CarService from '../../../services/CarService';

const { expect } = chai;

describe('Car Service', () => {
  const carModel = new CarModel();
  const carService = new CarService(carModel);

  before(async () => {
    sinon.stub(carModel, 'create').resolves(carMockId);
    sinon.stub(carModel, 'readOne').onCall(0).resolves(carMockId)
    .onCall(1).resolves(null);
  });

  after(()=>{
    sinon.restore();
  })
  describe('Create car', () => {
    it('successfully created', async () => {
      const newCar = await carModel.create(carMock);
      expect(newCar).to.be.deep.equal(carMockId);
    });

    it('failure', async () => {
      let error;
      try {
        await carService.create({});
      } catch (err) {
        error = err;
      }
			expect(error).to.be.instanceOf(ZodError);
    });
  })

  describe('searching a car', () => {
    it('successfully found', async () => {
      const carFound = await carService.readOne(carMockId._id);
      expect(carFound).to.be.deep.equal(carMockId);
    });

    it('failure', async () => {
      let error;
      try {
        await carService.readOne(carMockId._id)
      } catch (err: any) {
        error = err;
      }

      expect(error, 'error should be defined').not.to.be.undefined;
			expect(error.message).to.be.deep.equal(ErrorTypes.EntityNotFound);

    });
  })

});
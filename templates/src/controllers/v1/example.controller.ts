import * as exampleService from '../services/v1/example.service.js';

// example GET method controller
export const getAllExample = async (req, res, next) => {
  try {
    const examples = await exampleService.fetchAllUsers();
    res.status(200).json({
      status: 'success',
      data: { examples },
      message: "Successfully get all examples"
    });
  } catch (error) {
    next(error);
  }
};

// example POST method controller
export const postExample = async (req, res, next) => {
  try {
    const example = await exampleService.createExample();
    res.status(200).json({
      status: 'success',
      data: { examples },
      message: "Successfully create new data"
    });
  } catch (error) {
    next(error);
  }
};

// example PUT method controller
export const putExample = async (req, res, next) => {
  try {
    const example = await exampleService.updateExample();
    res.status(200).json({
      status: 'success',
      data: { examples },
      message: "Successfully updated data"
    });
  } catch (error) {
    next(error);
  }
};

// example DELETE method controller
export const deleteExample = async (req, res, next) => {
  try {
    const example = await exampleService.deleteExample();
    res.status(200).json({
      status: 'success',
      data: { examples },
      message: "Successfully deleted data"
    });
  } catch (error) {
    next(error);
  }
};
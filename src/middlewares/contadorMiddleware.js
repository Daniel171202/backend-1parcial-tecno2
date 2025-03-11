import Contador from '../models/Contador.js';

const contadorMiddleware = async (req, res, next) => {
  try {
    let doc = await Contador.findOne({ name: 'operations' });
    if (!doc) {
      doc = new Contador({ name: 'operations', value: 0 });
    }
    doc.value++;
    await doc.save();
  } catch (error) {
    console.error('Error incrementando el contador de operaciones:', error);
  }
  next();
};

export default contadorMiddleware;

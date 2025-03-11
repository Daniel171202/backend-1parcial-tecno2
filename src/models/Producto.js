import mongoose from 'mongoose';

const productoSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    precio: { type: Number, required: true },
    categoria: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Producto', productoSchema);

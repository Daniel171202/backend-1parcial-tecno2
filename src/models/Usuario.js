import mongoose from 'mongoose';

const usuarioSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    edad: { type: Number, required: true },
    ocupacion: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model('Usuario', usuarioSchema);

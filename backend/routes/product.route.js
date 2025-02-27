import express from "express";
import Product from "../models/product.model.js";
import mongoose from "mongoose";
import {
  createProduct,
  deleteProduct,
  getProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const router = express.Router();
// /v1/api/products

router.get("/products", getProducts);

router.post("/products", createProduct);

router.delete("/products/:id", deleteProduct);

router.put("/products/:id", updateProduct);

export default router;
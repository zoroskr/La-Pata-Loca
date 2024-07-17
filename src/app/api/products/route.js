import { connectDB } from "../../libs/mongodb";
import Product from "../../models/Product";
import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(request) {
  try {
    await connectDB();
    const data = await request.formData();
    const image = data.get("image");
    if (!image) {
      return NextResponse.error("No image provided", { status: 400 });
    }
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const filePath = path.join(process.cwd(), "public", image.name);
    await writeFile(filePath, buffer);

    let object = {};
    for (const [key, value] of data.entries()) {
      if (key !== 'image') { // Ignorar 'image' porque ya lo procesamos
        object[key] = value;
      }
    }
    object.image = image.name; // Añadir la ruta de la imagen al objeto

    console.log(object);
    const product = await Product.create(object); // Pasar el objeto JavaScript a create
    return NextResponse.json(product);
  } catch (error) {
    console.error(error);
    return NextResponse.error(error);
  }
}

export async function GET() {
    try{
      await connectDB();
      const products = await Product.find();
      return NextResponse.json(products);
    } catch (error) {
      console.error(error);
      return NextResponse.error(error);
    }
  }


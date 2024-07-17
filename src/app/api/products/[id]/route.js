import { connectDB } from "@/app/libs/mongodb";
import Product from "@/app/models/Product";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
      await connectDB();
      const { id } = params;
  
      if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
      }
  
      const product = await Product.findById(id); 
  
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
  
      return NextResponse.json(product); 
    } catch (error) {
      return NextResponse.json({ error: 'Error fetching Product' }, { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
      await connectDB();
      const { id } = params;
  
      if (!id) {
        return NextResponse.json({ error: 'ID is required' }, { status: 400 });
      }
  
      const product = await Product.findByIdAndDelete(id);
  
      if (!product) {
        return NextResponse.json({ error: 'Product not found' }, { status: 404 });
      }
  
      return NextResponse.json(product);
    } catch (error) {
      return NextResponse.json({ error: 'Error deleting Product' }, { status: 500 });
    }
  }

  export async function PUT(request, { params }) {
    try {
        await connectDB();
        const { id } = params;
        const updatedData = await request.json();

        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }

        const product = await Product.findByIdAndUpdate(id, updatedData, { new: true });

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Error updating Product' }, { status: 500 });
    }
}

export const getProducts = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

export const createProduct = async (newProduct) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products`, {
        method: "POST",
        body: newProduct
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }

  export const deleteProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error('Failed to delete the product.');
      }
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  export const getSpecificProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  
  export const editProduct = async (productId, updatedProduct) => {
    try {
      const response = await fetch(`http://localhost:3000/api/products/${productId}`, {
        method: "PUT",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct),
      });
      if (!response.ok) {
        throw new Error('Failed to update the product.');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
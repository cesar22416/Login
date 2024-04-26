import React, { useState, useEffect } from "react";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore";
import appFirebase from "../fact"; // Importa el objeto de configuración de Firebase
import { useParams } from "react-router-dom";

const CardComponent = () => {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const db = getFirestore(appFirebase); // Obtener la referencia a la base de datos de Firebase

    const collectionRef = categoryId
      ? query(collection(db, 'datos'), where('category', '==', categoryId))
      : collection(db, 'datos');

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {
          const data = doc.data();
          return { id: doc.id, ...data };
        });
        setProducts(productsAdapted);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <div className="Item-titulo">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {products && products.map(product => (
            <div key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.usuario}</p>
               <img src={product.img} alt="Imagen del producto" style={{width:"50px", height:"50px"}} />
              <p>{product.correo}</p>
              {/* Agrega aquí más información del producto si es necesario */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardComponent;

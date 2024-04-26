import React, { useState, useEffect } from "react";
import { getFirestore, query, where, collection, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import appFirebase from "../fact"; // Importa el objeto de configuración de Firebase
import { useParams } from "react-router-dom";
import AvatarComponent from '../Avatar/avatar'; // Importa el componente AvatarComponent

const Tempo = () => {
  const [userProducts, setUserProducts] = useState(null);
  const [loading, setLoading] = useState(true);

  const { categoryId } = useParams();
  const auth = getAuth(appFirebase);

  useEffect(() => {
    setLoading(true);

    // Verificar si el usuario está autenticado
    if (auth.currentUser) {
      const userEmail = auth.currentUser.email;
      const db = getFirestore(appFirebase); // Obtener la referencia a la base de datos de Firebase

      // Consulta los productos que pertenecen al usuario actual basado en el campo 'correo'
      const collectionRef = query(collection(db, 'datos'), where('correo', '==', userEmail));

      getDocs(collectionRef)
        .then(response => {
          const userProductsData = response.docs.map(doc => {
            const data = doc.data();
            return { id: doc.id, ...data };
          });
          setUserProducts(userProductsData);
        })
        .catch(error => {
          console.error("Error al obtener los productos del usuario:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [auth.currentUser, categoryId]);

  return (
    <div className="Item-titulo">
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          {userProducts && userProducts.map(product => (
            <div key={product.id}>
             {/* <h3>{product.name}</h3>*/}
              <AvatarComponent imageUrl={product.img} /> {/* Pasamos la URL de la imagen como prop */}
               <p>{product.usuario}</p>
              {/*<p>{product.correo}</p>*/}
              {/* Agrega aquí más información del producto si es necesario */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Tempo;

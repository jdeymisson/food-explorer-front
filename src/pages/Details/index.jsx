import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { FiMinus, FiPlus, FiChevronLeft } from "react-icons/fi";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Ingredient } from "../../components/Ingredient";
import { api } from "../../services/api";
import { useCart } from "../../hooks/cart";
import { useAuth } from "../../hooks/auth";

import receipt from "../../assets/receipt.svg";

import {
  Container,
  Main,
  Ingredients,
  ButtonBack,
  Content,
  Info,
} from "./styles";

export function Details() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState(null);
  const params = useParams();
  const { handleAddDishToCart } = useCart();
  
  const { user } = useAuth();
  const navigate = useNavigate();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function handleAddQuantity() {
    const isGreater10 = quantity >= 9;
    if (isGreater10) {
      return;
    }

    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return;
    }
    setQuantity(quantity - 1);
  }

  function handleEditDish(id) {
    navigate(`/edit/${id}`);
  }

  useEffect(() => {
    async function fetchDish() {
      const response = await api.get(`/dishes/${params.id}`);
      setData(response.data);
    };

    fetchDish();
  }, []);

  return (
    <Container>
      <Header />

      <Content>
        <ButtonBack>
          <Link to="/">
            {" "}
            <FiChevronLeft size={30} />
            Voltar
          </Link>
        </ButtonBack>
        {data && (
          <Main>
            <div>
              <img src={imageURL} alt={`imagem de ${data.title}`} />
            </div>
            <div>
              <h1>{data.title}</h1>
              <p>{data.description}</p>
              <Ingredients>
                {data.ingredients.map((ingredient) => (
                  <Ingredient
                    key={String(ingredient.id)}
                    ingredient={ingredient.name}
                  />
                ))}
              </Ingredients>
              <Info>
              {user.isAdmin ? 
                <div>
                  <Button
                    title="Editar prato"
                    onClick={() =>
                      handleEditDish(data.id)
                    }
                  />
                </div> : 
                <>
                <button onClick={handleRemoveQuantity} className="btn">
                  <FiMinus size={25} />
                </button>

                <span>0{quantity}</span>

                <button onClick={handleAddQuantity} className="btn">
                  <FiPlus size={25} />
                </button>

                <div>
                  <Button
                    title={`incluir - R$ ${data.price * quantity},00`}
                    onClick={() =>
                    handleAddDishToCart(data, quantity, imageURL)
                    }
                    />
                </div>
                </>
              }  
              </Info>
            </div>
          </Main>
        )}
      </Content>
      <Footer />
    </Container>
  );
} 
import {
  DollarCircleOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Card, Space, Statistic, Table, Typography } from "antd";
import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useParams } from "react-router-dom"; // Importez useParams pour récupérer le token de l'URL
import axios from "axios";
function Confirmation() {
  console.log("Home component rendered");
  const { token } = useParams(); // Récupérez le token de l'URL en utilisant useParams

  useEffect(() => {
    console.log("useEffect triggered");
    // Définissez une fonction asynchrone pour effectuer la requête GET vers l'API de confirmation
    const confirmEmail = async () => {
      try {
        // Effectuez la requête HTTP GET vers l'API de confirmation en utilisant axios
        const response = await axios.get(
          `http://localhost:3000/api/Condidat/confirmation/${token}`
        );
        console.log(response.data); // Affichez la réponse de l'API dans la console

        // Vous pouvez effectuer d'autres actions ici après la confirmation réussie
      } catch (error) {
        console.error(error); // Gérez les erreurs éventuelles
      }
    };

    // Appelez la fonction de confirmation lorsque le composant est monté
    confirmEmail();
  }, [token]); // Utilisez le token comme dépendance pour que useEffect soit déclenché à chaque changement du token

  // La fonction qui affiche l'alerte
  function showAlert() {
    Swal.fire({
      title: "Votre Confirmation est valide",
      icon: "success",
      timer: 5000, // durée en millisecondes (5 secondes)
      timerProgressBar: true,
      showConfirmButton: false,
    });
  }

  // Appeler la fonction pour afficher l'alerte quand le composant est monté
  React.useEffect(() => {
    showAlert();
  }, []);
  return (
    <div>
      <h1></h1>
    </div>
  );
}

export default Confirmation;

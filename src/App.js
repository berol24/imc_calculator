import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Header from "./components/Header";
import Message from "./components/Message";
import peur from "./assets/peur.png";
import good from "./assets/good.png";
import stresse from "./assets/stresse.png";
import attention from "./assets/attention.png";
import stop from "./assets/stop.png";
import Result from "./components/Result";

function App() {
  let [poids, setPoids] = useState("");
  let [taille, setTaille] = useState("");
  const [verify, setVerify] = useState(true);
  const [message, setMessage] = useState("");
  const [affiche_icone, setAffiche_icone] = useState(true);
  const [affiche_result, setAffiche_result] = useState(false);
  const [imageIcone, setImageIcone] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");
  let [messageErrorPoids, setMessageErrorPoids] = useState("");
  let [messageErrorTaille, setMessageErrorTaille] = useState("");

  let imc = poids / (taille * taille);

useEffect(() => {
  fetch('http://localhost:5000/api/hello')
    .then(res => res.json())
    .then(data => console.log(data.message));
}, []);


  const handlePoidsChange = (e) => {
    const value = e.target.value;

    // Vérifie si la valeur contient uniquement des chiffres ou est vide
    if (/^\d*\.?\d*$/.test(value)) {
      setPoids(value);
      setMessageErrorPoids(""); 
    } else {
      setMessageErrorPoids("Entrez uniquement des chiffres."); 
    }

    if (value === "" || value >= 0) {
      setPoids(value); 
      setMessageErrorPoids(""); 
    } else {
      setMessageErrorPoids("Le poids ne peut pas être négatif."); 
    }
  };

  const handleTailleChange = (e) => {
    const value = e.target.value;

    // Vérifie si la valeur contient uniquement des chiffres ou est vide
    if (/^\d*\.?\d*$/.test(value)) {
      setTaille(value);
      setMessageErrorTaille("");
    } else {
      setMessageErrorTaille("Entrez uniquement des chiffres."); // Gestion des caractères non valides
    }

    if (value === "" || value >= 0) {
      setTaille(value);
      setMessageErrorTaille("");
    } else {
      setMessageErrorTaille("La taille ne peut pas être négatif."); // Gestion des nombres négatifs
    }
  };

  const handleVerify = () => {

 // Vérification si les champs sont remplis
 if (!poids || !taille) {
  if (!poids) {
    setMessageErrorPoids("Veuillez remplir le champ poids.");
  }
  if (!taille) {
    setMessageErrorTaille("Veuillez remplir le champ taille.");
  }
  return; 
}


    
    if (imc < 18.5) {
      setImageIcone(peur);
      setMessage(
        "Vous êtes en état de maigreur. Il pourrait être important de consulter un professionnel de santé pour évaluer vos besoins nutritionnels."
      );

      setBackgroundColor("#02B1EC");
    } else if (imc >= 18.5 && imc < 25) {
      setImageIcone(good);
      setMessage(
        "Votre IMC est dans la plage normale, ce qui est généralement considéré comme un indicateur de bonne santé. Continuez à maintenir un mode de vie équilibré."
      );
      setBackgroundColor("#7AB72C");
    } else if (imc >= 25 && imc < 30) {
      setImageIcone(stresse);
      setMessage(
        "Vous êtes en situation de surpoids. Un ajustement de l'alimentation et de l'activité physique pourrait être bénéfique pour votre santé."
      );

      setBackgroundColor("#F69E00");
    } else if (imc >= 30 && imc <= 40) {
      setImageIcone(attention);

      setMessage(
        "Votre IMC indique une obésité modérée. Il est conseillé de consulter un médecin ou un nutritionniste pour élaborer un plan adapté à vos besoins."
      );

      setBackgroundColor("#F07002");
    } else if (imc > 40) {
      setImageIcone(stop);

      setMessage(
        "Votre IMC se situe dans la catégorie obésité sévère. Un accompagnement médical est recommandé pour prévenir ou gérer les complications liées à votre santé."
      );
      setBackgroundColor("#E40714");
    }
    setMessageErrorPoids("");
    setMessageErrorTaille("");
    setAffiche_result(true);
  };
  const handleInitialise = () => {
    window.location.reload();
    setPoids("");
    setTaille("");
    setMessage("");
    setVerify(true);
    setAffiche_icone(false);
    setBackgroundColor("white");
    setImageIcone("");
    setMessageErrorPoids("");
    setMessageErrorTaille("");
    setAffiche_result(false);
  };

  return (
    <div className="App">
      <Header />
      <Input
        unite={"Kg"}
        type={"poids"}
        value={poids}
        onChange={handlePoidsChange}
        messageError={messageErrorPoids}
        setMessageError={setMessageErrorPoids}
      />

      <Input
        unite={"m"}
        type={"taille"}
        value={taille}
        onChange={handleTailleChange}
        messageError={messageErrorTaille}
        setMessageError={setMessageErrorTaille}
      />
       {affiche_result &&  <Result imc ={imc? imc.toFixed(2): 0} />}

      <div className="btn">
        {verify && (
          <Button
            nom={"Vérifier"}
            backgroundButton={"#08A22A"}
            onClick={handleVerify}
          />
        )}
        <Button
          nom={"Réinitialiser"}
          backgroundButton={"#7f8681"}
          onClick={handleInitialise}
        />
      </div>


    
      <Message
        message={message}
        affiche_icone={affiche_icone}
        image_icone={imageIcone}
        backgroundColor={backgroundColor}
      />
    </div>
  );
}

export default App;

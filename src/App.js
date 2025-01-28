import { useState } from "react";
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

function App() {
  const [poids, setPoids] = useState("");
  const [taille, setTaille] = useState("");
  const [verify, setVerify] = useState(true);
  const [initialise, setInitialise] = useState(false);
  const [message, setMessage] = useState("");
  const [affiche_icone, setAffiche_icone] = useState(true);
  const [imageIcone, setImageIcone] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("white");

   let imc = poids / (taille * taille);


  const handleVerify = () => {

    if (imc < 18.5) {
      setImageIcone(peur);
      setMessage(
        "Vous êtes en état de maigreur. Il pourrait être important de consulter un professionnel de santé pour évaluer vos besoins nutritionnels."
      );

      setBackgroundColor("#02B1EC");
    } else if ((imc >= 18.5) && (imc < 25)) {
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

    setVerify(false);
    setInitialise(true);
  };
  const handleInitialise = () => {
    window.location.reload();
    setPoids("");
    setTaille("");
    setMessage("");
    setVerify(true);
    setInitialise(false);
    setAffiche_icone(false);
    setBackgroundColor("white");
    setImageIcone("")
    // imc = 0;
  };

  return (
    <div className="App">
      <Header />
      <Input unite={"Kg"} type={"poids"} value={poids} onChange={setPoids} />
      <Input unite={"m"} type={"taille"} value={taille} onChange={setTaille} />
      {verify && <Button nom={"Vérifier"} onClick={handleVerify} />}
      {initialise && (
        <Button nom={"Réinitialiser"} onClick={handleInitialise} />
      )}
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

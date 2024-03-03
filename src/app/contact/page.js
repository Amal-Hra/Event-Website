<<<<<<< HEAD
import React from "react";
import styles from "./contact.module.css";
=======
import React from 'react';
import styles from './contact.module.css';
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a

const Contact = () => {
  return (
    <div className={styles.container}>
<<<<<<< HEAD
      <h1 className={styles.title}>
        Besoin d&apos;aide ou d&apos;informations supplémentaires ?
      </h1>
      <p className={`${styles.text} ${styles.mainText}`}>
        Vous avez des questions sur nos événements ou vous avez besoin
        d&apos;aide pour planifier votre visite ?
      </p>
      <div className={styles.centerText}>
        <p className={`${styles.text} ${styles.mainText1}`}>
          N&apos;hésitez pas à nous contacter.
        </p>
        <p className={`${styles.text} ${styles.mainText1}`}>
          Nous sommes là pour vous aider !
        </p>
      </div>
      <img
        className={styles.image}
        src="/contact1.jpeg"
        alt="Image de contact"
      />
      <div className={styles.mainText2div}>
        <p className={styles.text}>
          Vous pouvez nous joindre par téléphone ou par e-mail :
        </p>
        <p className={styles.text}>
          Numéro de téléphone : <a href="tel:+1234567890">123-456-7890</a>
        </p>
        <p className={styles.text}>
          Adresse e-mail :{" "}
          <a href="mailto:info@votresiteweb.com">info@votresiteweb.com</a>
        </p>
        <p className={styles.text}>
          Nous sommes disponibles du lundi au vendredi de 9h à 17h.
        </p>
        <p className={styles.text}>
          N&apos;hésitez pas à remplir le formulaire ci-dessous pour toute
          question ou commentaire :
        </p>
      </div>

      <div className={styles.divform}>
        <form className={styles.form}>
          <label className={styles.label} htmlFor="firstname">
            Prénom :
          </label>
          <input
            className={styles.input}
            type="text"
            id="firstname"
            name="firstname"
            required
          />
          <label className={styles.label} htmlFor="lastname">
            Nom de famille :
          </label>
          <input
            className={styles.input}
            type="text"
            id="lastname"
            name="lastname"
            required
          />
          <label className={styles.label} htmlFor="email">
            Adresse électronique :
          </label>
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            required
          />
          <label className={styles.label} htmlFor="message">
            Message :
          </label>
          <textarea
            className={styles.input}
            id="message"
            name="message"
            required
          ></textarea>
          <button className={styles.button} type="submit">
            Envoyer
          </button>
        </form>
      </div>

      <p className={styles.text}>
        * En soumettant ce formulaire, vous acceptez que vos informations soient
        utilisées pour répondre à votre demande.
      </p>
=======
      <h1 className={styles.title}>Besoin d'aide ou d'informations supplémentaires ?</h1>
      <p className={`${styles.text} ${styles.mainText}`}>Vous avez des questions sur nos événements ou vous avez besoin d'aide pour planifier votre visite ?</p>
     <div className={styles.centerText}>
     <p className={`${styles.text} ${styles.mainText1}`}>N'hésitez pas à nous contacter.</p>
      <p className={`${styles.text} ${styles.mainText1}`}>Nous sommes là pour vous aider !</p>
     </div>
      <img className={styles.image} src="/contact1.jpeg" alt="Image de contact" />
<div className={styles.mainText2div}>
<p className={styles.text}>Vous pouvez nous joindre par téléphone ou par e-mail :</p>
      <p className={styles.text}>Numéro de téléphone : <a href="tel:+1234567890">123-456-7890</a></p>
      <p className={styles.text}>Adresse e-mail : <a href="mailto:info@votresiteweb.com">info@votresiteweb.com</a></p>
      <p className={styles.text}>Nous sommes disponibles du lundi au vendredi de 9h à 17h.</p>
      <p className={styles.text}>N'hésitez pas à remplir le formulaire ci-dessous pour toute question ou commentaire :</p>
</div>
     

<div className={styles.divform}>
<form className={styles.form}>
        <label className={styles.label} htmlFor="firstname">Prénom :</label>
        <input className={styles.input} type="text" id="firstname" name="firstname" required />
        <label className={styles.label} htmlFor="lastname">Nom de famille :</label>
        <input className={styles.input} type="text" id="lastname" name="lastname" required />
        <label className={styles.label} htmlFor="email">Adresse électronique :</label>
        <input className={styles.input} type="email" id="email" name="email" required />
        <label className={styles.label} htmlFor="message">Message :</label>
        <textarea className={styles.input} id="message" name="message" required></textarea>
        <button className={styles.button} type="submit">Envoyer</button>
      </form>
</div>
      
      
      <p className={styles.text}>* En soumettant ce formulaire, vous acceptez que vos informations soient utilisées pour répondre à votre demande.</p>
>>>>>>> 8bf1680e9d5a086f88058c74698ef858d3469f2a
    </div>
  );
};

export default Contact;

import styles from "../componentsCSS/form.module.css";

export function Form() {
  return (
    <>
      <form
        action="https://formsubmit.co/ffac70ffbb48b25cb540e8c11dbd315a"
        method="POST"
        className={styles.form}
      >
        <h2>¡Envíame un correo!</h2>
        <label htmlFor="name">Nombre *</label>
        <input type="text" name="name" autoComplete="off" />
        <label htmlFor="email">Correo electrónico *</label>
        <input type="email" name="email" autoComplete="off" />
        <label htmlFor="message">Mensaje *</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <button type="submit" className={styles.btn}>
          ENVIAR
        </button>
      </form>
    </>
  );
}

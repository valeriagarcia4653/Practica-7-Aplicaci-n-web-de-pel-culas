import styles from "../components/Footer.module.css"
import Logo from "../Img/Logo.png"
export function Footer()
{
    return (
        <footer className={styles.footer}>
        <div className={styles.section}>
        <h3 className={styles.title}>🍿 Catálogo de Películas</h3>
        <p><strong>Integrantes:</strong> Valeria Naomi Garcia Razo, Leopoldo Alejandro Rojas Vega, Maria Guadalupe Campos, Neri Saldivar Carlos Emmanuel</p>
        </div>

        <div className={styles.info}>
        <p><strong>Materia:</strong> Diseño de aplicaciones web en la nube y móviles</p>
        <p><strong>Profesor:</strong> Zeus Gutierrez Cobián</p>
        <p><strong>Calendario:</strong> 2026A</p>
        <p><strong>Fecha:</strong> Abril 2026</p>
       
        <div className={styles.copyright}>&copy; 2026 - Guadalajara, Jalisco.</div>
        </div>
        </footer>
    )
}
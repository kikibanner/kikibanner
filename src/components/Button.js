import styles from './Button.css'

function Button({ text, link }) {
    return (
        <a href={link} className="btn mt-2 tombol animate__animated animate__fadeIn animate__delay-2s" target="_blank">{text}</a>
    )
}

export default Button

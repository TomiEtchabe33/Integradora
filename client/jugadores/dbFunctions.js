export async function obtenerJugador() {
    try {
        const jugadores = await fetch('http://192.168.1.45:8080/');
        const data = await jugadores.json();
        return data;
    } catch(e) {
        return e.message;
    }
}
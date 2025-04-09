export default function handler(req, res) {
  if (req.method === 'GET') {
    // Lógica para manejar comandos, puede ser dinámico o fijo
    const command = 'ENCENDER'; // Ejemplo de comando, puede ser dinámico

    res.status(200).json({ command: command });
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

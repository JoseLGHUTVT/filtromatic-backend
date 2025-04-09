// api/control.js
export default function handler(req, res) {
  if (req.method === 'POST') {
    const { command } = req.body;
    // Aquí puedes manejar el comando que recibes
    console.log("Comando recibido:", command);
    res.status(200).json({ message: 'Comando recibido', command });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

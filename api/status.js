let servosState = {
  servosEncendidos: false,
  motorSpeed: 0,
};

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(servosState);
  } else if (req.method === 'POST') {
    const { servosEncendidos, motorSpeed } = req.body;
    servosState.servosEncendidos = servosEncendidos;
    servosState.motorSpeed = motorSpeed;
    res.status(200).json(servosState);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

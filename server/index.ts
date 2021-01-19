import server from './api/server';
const PORT = process.env.PORT || 4004;

server.get('/', (req, res) => {
   res.send('server running');
});

server.listen(PORT, () => console.log(`server running in port ${PORT}`));

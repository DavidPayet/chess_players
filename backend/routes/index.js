import express from 'express';
import connection from './conf';


const router = express.Router();

router.get('/allplayers', (req, res) => {
  // connection à la base de données, et sélection des joueurs
  connection.query('SELECT * from players', (err, results) => {
    if (err) {
      // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
      res.status(500).send('Erreur lors de la récupération des joueurs');
    } else {
      // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
      res.json(results);
    }
  });
});

router.post('/addplayer', (req, res) => {
  const { body } = req;
  connection.query('INSERT INTO players SET ?', body, (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(201);
    }
  });
});

router.delete('/players/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM players WHERE id = ?', id, (err) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.sendStatus(204);
    }
  });
});


/* GET index page. */
router.get('/', (req, res) => {
  res.json({
    title: 'Express'
  });
});

export default router;

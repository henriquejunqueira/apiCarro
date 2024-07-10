const { alterar } = require('../controllers/CarroController');
const db = require('../db');

module.exports = {
	// GET http://localhost:3000/api/carros
	buscarTodos: () => {
		return new Promise((aceito) => {
			db.query('SELECT * FROM carros', (error, results) => {
				if (error) {
					rejeitado(error);
					return;
				}

				aceito(results);
			});
		});
	},

	// GET http://localhost:3000/api/carro/codigo
	buscarUm: (codigo) => {
		return new Promise((aceito, rejeitado) => {
			db.query(
				'SELECT * FROM carros WHERE codigo = ?',
				[codigo],
				(error, results) => {
					if (error) {
						rejeitado(error);
						return;
					}

					if (results.length > 0) {
						aceito(results[0]);
					} else {
						aceito(false);
					}
				},
			);
		});
	},

	// POST http://localhost:3000/api/carro
	inserir: (modelo, placa) => {
		return new Promise((aceito, rejeitado) => {
			db.query(
				'INSERT INTO carros (modelo, placa) VALUES (?, ?)',
				[modelo, placa],
				(error, results) => {
					if (error) {
						rejeitado(error);
						return;
					}
					aceito(results.insertCodigo);
				},
			);
		});
	},

	// PUT http://localhost:3000/api/carro/codigo
	alterar: (codigo, modelo, placa) => {
		return new Promise((aceito, rejeitado) => {
			db.query(
				'UPDATE carros SET modelo = ?, placa = ? WHERE codigo = ?',
				[modelo, placa, codigo],
				(error, results) => {
					if (error) {
						rejeitado(error);
						return;
					}
					aceito(results);
				},
			);
		});
	},

	// DELETE http://localhost:3000/api/carro/codigo
	excluir: (codigo) => {
		return new Promise((aceito) => {
			db.query(
				'DELETE FROM carros WHERE codigo = ?',
				[codigo],
				(error, results) => {
					if (error) {
						rejeitado(error);
						return;
					}
				},
			);
		});
	},
};

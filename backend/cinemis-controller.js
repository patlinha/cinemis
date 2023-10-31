const express = require("express");
const router = express.Router();
const HttpStatus = require('http-status-codes');
const User = require('./models/models').User
const Filme = require('./models/models').Filme

class CinemisController {

    constructor() {
        router.post('/login',  async (req, res) => {
            try {
                const user = await User.findOne({
                    where: {
                        username: req.body.user,
                    },
                });
                const parsed_user = JSON.parse(JSON.stringify(user))

                if (user && parsed_user.username === req.body.user && parsed_user.password === req.body.password) {
                    res.status(HttpStatus.OK).send('Correct user and password');
                } else {
                    res.status(HttpStatus.UNAUTHORIZED).send('Unauthorized user');
                }
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.UNAUTHORIZED).send('Unauthorized user');
            }
        })

        router.get('/filme',  async (req, res) => {
            try {
                const filmes = await Filme.findAll();
                const parsed_filmes = JSON.parse(JSON.stringify(filmes))

                if (parsed_filmes) {
                    res.status(HttpStatus.OK).send(parsed_filmes);
                } else {
                    res.status(HttpStatus.NO_CONTENT).send('No movies found');
                }
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.NO_CONTENT).send('No movies found');
            }
        })

        router.get('/filme/:id', async (req, res) => {
            try {
                if (req.params.id) {
                    const filme_id = req.params.id
                    const filmes = await Filme.findOne({
                        where: {
                            id: filme_id,
                        },
                    });
                    const parsed_filmes = JSON.parse(JSON.stringify(filmes))

                    if (parsed_filmes) {
                        res.status(HttpStatus.OK).send(parsed_filmes);
                    } else {
                        res.status(HttpStatus.NO_CONTENT).send('No movies found');
                    }
                } else {
                    res.status(HttpStatus.NO_CONTENT).send('No movies found');
                }
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.NO_CONTENT).send('No movies found');
            }
        })

        router.post('/filme', async (req, res) => {
            try {
                const isMovieDataValid = this._isMovieDataValidAllRequired(req.body)
                if (isMovieDataValid) {
                    this._buildMovieObject(req.body).save().then((movie) => {
                        console.log('User inserted into the database:', movie.toJSON());
                        res.status(HttpStatus.OK).send('User created with id ' + movie.toJSON().id);
                    }).catch((error) => {
                        console.log(error)
                        res.status(HttpStatus.NO_CONTENT).send('Something went wrong while creating movie');
                    });
                } else {
                    res.status(HttpStatus.BAD_REQUEST).send('Something is wrong with payload');
                }
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.NO_CONTENT).send('Something went wrong');
            }
        })

        router.put('/filme/:id', async (req, res) => {
            try {
                const isMovieDataValid = this._isMovieDataValidToUpdate(req.body)
                if (isMovieDataValid) {
                    await Filme.update(
                        req.body,
                        { where: { id: req.params.id } } // Condition to select records
                    )
                        .then((result) => {
                            console.log('Movie updated');
                            res.status(HttpStatus.OK).send('Movie with id ' + req.params.id + ' updated');
                        })
                        .catch((error) => {
                            console.log(error)
                            res.status(HttpStatus.BAD_REQUEST).send('Something went wrong while updating movie');
                        });
                } else {
                    res.status(HttpStatus.BAD_REQUEST).send('Something is wrong with the payload');
                }
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong during movie updating');
            }
        })

        router.delete('/filme/:id', async (req, res) => {
            try {
                await Filme.destroy({
                    where: {
                        id: req.params.id,
                    },
                }).then((rowsDeleted) => {
                    if (rowsDeleted === 0) {
                        console.log('No records deleted.');
                        res.status(HttpStatus.NOT_FOUND).send('No records deleted.');
                    } else {
                        console.log('User deleted successfully.');
                        res.status(HttpStatus.OK).send('Movie with id ' + req.params.id + ' deleted');
                    }
                }).catch((error) => {
                    console.log(error)
                    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong during movie deleting');
                });
            } catch (error) {
                console.log(error)
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong during movie deleting');
            }
        })
    }

    _isMovieDataValidAllRequired(data) {
        return (data.nome && data.idade && data.ano && data.direcao && data.pais && data.legenda &&
            data.cor && data.curadoria && data.ciclo && data.sala && !!data.time)
    }

    _isMovieDataValidToUpdate(data) {
        return !!(data.nome || data.idade ||  data.ano || data.direcao || data.pais || data.legenda ||
            data.cor || data.curadoria || data.ciclo || data.sala || !!data.time)
    }

    _buildMovieObject(movie) {
        return Filme.build({
            id: movie.id,
            nome: movie.nome,
            idade: movie.idade,
            ano: movie.ano,
            direcao: movie.direcao,
            pais: movie.pais,
            legenda: movie.legenda,
            cor: movie.cor,
            curadoria: movie.curadoria,
            ciclo: movie.ciclo,
            sala: movie.sala,
            time: movie.time
        });
    }

    _buildMovieObjectToUpdate(dataToUpdate) {

        return Filme.build(dataToUpdate)


        return Filme.build({
            id: movie.id,
            nome: movie.nome,
            idade: movie.idade,
            ano: movie.ano,
            direcao: movie.direcao,
            pais: movie.pais,
            legenda: movie.legenda,
            cor: movie.cor,
            curadoria: movie.curadoria,
            ciclo: movie.ciclo,
            sala: movie.sala,
            time: movie.time
        });
    }
}

new CinemisController();
module.exports = router;
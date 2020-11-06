const uuidv4 = require('uuid/v4');


module.exports = app => {
  
  const filmesDB = app.data.filmes;
  const controller = {};

  const { filmes: filmesMock, } = filmesDB;

  controller.listFilmes = (req, res) => res.status(200).json(filmesDB);

  controller.saveFilmes = (req, res) => {
    filmesMock.data.push({
      id: uuidv4(),
      titulo: req.body.titulo,
      ano: req.body.ano,
      genero: req.body.genero
    });

    res.status(201).json(filmesMock);
  }

  controller.removeFilmes = (req, res) => {
    const { filmeId, } = req.params;

    const foundFilmeIndex = filmesMock.data.findIndex(filme => filme.id === filmeId);

    if(foundFilmeIndex === -1){
      res.status(404).json({
        message: 'Filme não encontrado',
        success: false,
        filmes: filmesMock,
      });
    }else {
      filmesMock.data.splice(foundFilmeIndex, 1);
      res.status(200).json({
        message: 'Filme removido com sucesso!',
        success: true,
        filmes: filmesMock,
      });
    }


  }
  controller.updateFilmes = (req,res)=> 
   {
    const {filmeId} = req.params;
    const foundFilmeIndex = filmesMock.data.findIndex(filme => filme.id === filmeId);
    if(foundFilmeIndex === -1){
      res.status(404).json({
        message: 'Filme não encontrado',
        success: false,
        filmes: filmesMock,
      });
    }else {
      filmesMock.data[foundFilmeIndex].title =  req.body.titulo;
      filmesMock.data[foundFilmeIndex].year =  req.body.ano;
      filmesMock.data[foundFilmeIndex].type =  req.body.genero;

      
      res.status(200).json({
        message: 'Filme atualizado com sucesso!',
        success: true,
        games: gamesMock,
      });
    }
  }
  return controller;

}
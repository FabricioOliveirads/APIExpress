module.exports  = app => {
    const controller = app.controllers.filmes;
  
    app.route('/api/v1/filmes')
      .get(controller.listFilmes)
      .post(controller.saveFilmes);
  
    app.route('/api/v1/filmes/:filmemeId')
      .delete(controller.removeFilmes);
  
    app.route('/api/v1/filmes/:filmeId').
    put(controller.updateFilmes);  
  }
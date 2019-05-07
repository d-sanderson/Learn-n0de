exports.homePage = (req, res) => {
  console.log(req.name);
  console.log(req.message);
  res.render('index');
};


exports.addStore = (req, res) => {
  res.render('editStore', { title: '🏬 Add Store'});
};

exports.createStore = (req, res) => {
  
}
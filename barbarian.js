var barbarian = {
  name: "Maximus",
  weapon: "machette",
  health: 50,
  angerlevel: 0,
  favebeer: "Rolling Rock",
  drink: function(beer) {
    if(beer == this.favebeer) {
      this.health += 2;
    }
    else
      this.angerlevel += 10;
  }
}

module.exports = barbarian;
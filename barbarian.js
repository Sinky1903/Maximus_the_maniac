var barbarian = {
  name: "Maximus",
  weapon: "machette",
  health: 50,
  angerlevel: 0,
  favebeer: "Rolling Rock",
  drink: function() {
    return this.health += 2;
  }
}

module.exports = barbarian;
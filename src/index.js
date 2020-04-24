const LIBRARIES = {
  Skill: require("../../../Skill")
};

class Random extends LIBRARIES.Skill{
  constructor(_main, _settings) {
    super(_main, _settings);
    const SELF = this;

    this.Main.Manager.addAction("Random.dice", function(_intent, _socket){
      _intent.Variables.result = SELF.Random(1, 6);
      _intent.answer(_socket);
    });

    this.Main.Manager.addAction("Random.between", function(_intent, _socket){
      _intent.Variables.result = SELF.Random(_intent.Variables.first, _intent.Variables.last);
      _intent.answer(_socket);
    });
  }

  Random(_first_number, _last_number){
    const SMALLER = _first_number < _last_number ? _first_number : _last_number;
    const BIGGER = _last_number > _first_number ? _last_number : _first_number;
    return Math.floor(Math.random() * (BIGGER - (SMALLER - 1))) + SMALLER;
  }
}

module.exports = Random;

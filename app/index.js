var Generator = require("yeoman-generator");

const repoURL = "git@github.com:maximsan/test-repo.git";

module.exports = class extends Generator {
  // The name `constructor` is important here
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    // Custom code
    this.repo = `${repoURL}`;
  }


  initRepo() {
    this.spawnCommandSync('git', ['init']);
    this.spawnCommandSync('git', ['remote', 'add', 'origin', this.repo]);
    this.spawnCommandSync('git', ['add', '--all']);
    this.spawnCommandSync('git', ['commit', '-m', '"initial commit from generator"']);
    this.spawnCommandSync('git', ['push', '-u', 'origin', 'master']);
  }

  methodStart() {
    this.log("Start generating repo");
  }
  
  methodFinish() {
    this.log("Finish generating repo");
  }
};

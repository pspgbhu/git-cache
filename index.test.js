const fs = require('fs-extra');
const path = require('path');
const gitCache = require('./index');

jest.setTimeout(1000 * 30);

describe('testing git-cache', () => {

  const git = 'pspgbhu/eslint-g';
  const target = '__target__';
  const cacheDir = '__demo__';
  const zipTarget = '__zip__';

  test('testing property: git, target, cacheDir', done => {
    gitCache({
      git,
      target,
      cacheDir,
    }).then(() => {
      done();
    });
  });

  test('testing property: way', done => {
    gitCache({
      git,
      target: zipTarget,
      way: 'zip',
    }).then(() => {
      done();
    });
  });

  test('testing property: offline', done => {
    // create a file as the flag，if the flag file exists in the newly created target folder,
    // then means that the target folder is directly copied cached files.
    fs.writeFileSync(path.resolve(__dirname, cacheDir, 'flag.flag'));

    gitCache({ git, target, cacheDir, }).then(() => {
      if (fs.existsSync(path.resolve(__dirname, target, 'flag.flag'))) {
        done();
      } else {
        throw new Error('dont exists flag file');
      }
    });
  });

  afterAll(() => {
    fs.remove(path.resolve(__dirname, target));
    fs.remove(path.resolve(__dirname, zipTarget));
    fs.remove(path.resolve(__dirname, cacheDir));
  });
});

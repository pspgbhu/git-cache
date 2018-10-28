# template-down

It is useful for creating a template by git clone. It saved the template to local cached folder, and it will execute `git pull` and `cp` instead of `git clone` every time creating template. So it could significantly improve the speed of installing template.

## install

```bash
$ npm install template-down
```

## Usage

```js
const path = require('path');
const os = require('os');
const templateDown = require('template-down');

templateDown({
    git: 'pspgbhu/template-down',
    target: './project',
    cacheDir: path.join(os.homedir(), '.template-down', 'template'),
}).then(() => {
    console.log('Generated template success!');
});
```

**templateDown(options)**

- **options.git `<string>`**

    The URL of git repository. If this is a github repository, you just input as `"<username>/<repo>"`, else must input the whole URL.

- **options.target `<string>`**

    Create the template to this folder.

- **options.cacheDir `<string>`**
    Default: `path.join(os.homedir(), '.template-down', hash)`(same options.git have same hash).

    The template repository will be cached in this folder.

- **options.branch `<string>`**
    Default: `'master'`.

    The branch of the repository.

- **options.offline `<boolean>`**
    Default: `false`.

    If this value is `true`, it would copied files directly to target folder, rather than execute `git pull` before copy files. Must pay attenation to that it dependent on the local cached files, if there are not cached files, it will execute `git clone` before copy. It currently only work with the situation that `options.way` equal to `'git'`

- **options.way `<string>`**
    Default: `'git'`.

    The way of downloading template. The valid value are `'git'` or `'zip'`. `'git'` means by git clone, `'zip'` means by downloading zip and extracting.

- **options.zip `<string>`**

    If `options.way` is `'zip'`, and the value of `options.git` is a whole URL, you must input a zip download URL in this property. If `options.git` is same as `'<username>/<repo>'`, you could ignore this item, and it will automatic generated zip download URL.

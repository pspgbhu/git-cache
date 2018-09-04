export enum EGitCacheWay {
  git = 'git',
  zip = 'zip',
}

/**
 * @param opts Git repository url. If it is a github repo, only
 * @param opts.git Git repository url. If it is a github repo, only
 * type '<username>/<repo>'.
 * @param opts.target The folder of generating to.
 * @param opts.cacheDir Default `~/.git-cache/${name}`, the folder
 * @param opts.branch Default 'master'. Git branch.
 * @param opts.way The way of install template, only 'git' or 'zip'.
 * to keep cache.
 * @param opts.zip Zip downloading url. If opt.git is a github
 * repository, this option is unnecessary.
 * @param opts.offline use cached files, and don't update.
 */
declare function gitCache(opts: {
  git: string;
  target: string;
  cacheDir?: string;
  branch?: string;
  way?: string;
  zip?: EGitCacheWay;
  offline?: boolean;
}): Promise<void>;

export default gitCache;

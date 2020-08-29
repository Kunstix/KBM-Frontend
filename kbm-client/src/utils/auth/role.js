export const Role = {
  ADMIN: 'ROLE_ADMIN',
  PM: 'ROLE_PM',
  DEV: 'ROLE_DEV',
  WATCHER: 'ROLE_WATCHER',
  ALL: 'ALL'
};

export const showForPm = roles => roles.indexOf(Role.PM) !== -1;
export const dontShowForWatcher = roles => roles.indexOf(Role.WATCHER) === -1;

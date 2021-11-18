import updateNotifier from 'update-notifier';
import compare from 'semver-compare';

export const checkUpdates = () => {
  const notifier = updateNotifier({
    pkg: require('../../package.json'),
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 0,
  });
  if (notifier.update && compare(notifier.update.latest, notifier.update.current) === 1) {
    notifier.notify({
      defer: false,
    });
    return true;
  }
  return false;
};

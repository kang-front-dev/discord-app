
import { Status } from '../mocks/users';

export function getStatus(status: Status) {
  switch (status) {
    case 'online':
      return 'Online';

    case 'afk':
      return 'Idle';

    case 'offline':
      return 'Offline';

    case 'dnd':
      return 'Do Not Disturb';

    default:
      break;
  }
}

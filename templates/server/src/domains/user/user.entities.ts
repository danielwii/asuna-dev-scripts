import { deserializeSafely } from '@danielwii/asuna-helper/dist/validate';
import {
  AbstractTimeBasedBaseEntity,
  EntityConstructorObject,
} from '@danielwii/asuna-node-server/dist/modules/base/base.entity';
import { EntityMetaInfo } from '@danielwii/asuna-node-server/dist/modules/common/decorators/meta.decorator';
import { InjectUserProfile, UserProfile } from '@danielwii/asuna-node-server/dist/modules/core/auth/user.entities';

import { Entity } from 'typeorm';

@EntityMetaInfo({ name: 'users' })
@Entity('www__t_users')
export class User extends InjectUserProfile(AbstractTimeBasedBaseEntity) {
  /*
  constructor(o?: EntityConstructorObject<User>, profile?: UserProfile) {
    super();
    Object.assign(this, { id: profile?.id }, deserializeSafely(User, o));
  }
*/

  static of(o?: EntityConstructorObject<User>, profile?: UserProfile) {
    const user = new User();
    Object.assign(user, { id: profile?.id }, deserializeSafely(User, o));
    return user;
  }
}

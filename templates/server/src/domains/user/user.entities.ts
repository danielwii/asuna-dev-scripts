import {
  AbstractTimeBasedBaseEntity,
  deserializeSafely,
  EntityConstructorObject,
  EntityMetaInfo,
  InjectUserProfile,
  UserProfile,
} from 'asuna-node-server';
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
